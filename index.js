#!/usr/bin/env node

import { questions } from './questions.js';
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

let playerName;
let score = 0;

async function welcome() {
    const welcome = "Node/Express Quiz";

    const figletPromise = new Promise((resolve, reject) => {
        figlet(welcome, (err, data) => {
            if (err) {
                reject(err);
            } else {
                console.log(gradient.pastel.multiline(data));
                resolve();
            }
        });
    });

    await figletPromise;

    console.log(`
       Welcome to the ${chalk.yellow("Node/Express Quiz")}!
       You will be asked a series of ${chalk.green("10 questions")} about Node.js and Express.js.
       You must answer ${chalk.red("7 or more questions")} correctly to pass the quiz.
    `);
}

async function askName() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What should I call you before we start?',
        default() {
            return 'Player';
        },
    });

    playerName = answers.player_name;

    console.log(`\n${chalk.green(`Nice to meet you, ${playerName}! Let's get started.`)}\n`);
}

async function askQuestion(questionObj, questionNumber) {
    const answers = await inquirer.prompt({
        name: 'question',
        type: 'list',
        message: `Question ${questionNumber}: ${questionObj.question}`,
        choices: questionObj.choices,
    });

    console.log();

    const isCorrect = questionObj.choices.indexOf(answers.question) === questionObj.correctAnswerIndex;
    return handleAnswer(isCorrect, questionObj.choices[questionObj.correctAnswerIndex]);
}

async function handleAnswer(isCorrect, correctAnswer) {
    const spinner = createSpinner('Checking your answer...').start();
    await sleep();

    if (isCorrect) {
        spinner.success({ text: `Nice work, ${playerName}! You got it right!` });
        score++;
    }
    else {
        spinner.error({ text: `Sorry, ${playerName}!` });
        console.log(`The correct answer is: ${chalk.green(correctAnswer)}`);
    }
    console.log(`Your current score is: ${chalk.green(score + "/10")}\n`);
}

async function endOfGame() {
    await sleep();

    console.clear();

    let win = "Congratulations,";
    let lose = "Sorry,";
    let message = chalkAnimation.karaoke(`${score >= 7 ? win : lose} ${playerName}! You ${score >= 7 ? "passed" : "failed"} the quiz with a score of ${score + "/10"}!`);

    await sleep(5000);
    message.stop();

    const answers = await inquirer.prompt({
        name: 'play_again',
        type: 'input',
        message: 'Do you want to play again? (y/n)',
        default() {
            return 'n';
        },
    });

    console.log();

    if (answers.play_again.toLowerCase() === 'y' || answers.play_again.toLowerCase() === 'yes') {
        score = 0;
        await gameLoop();
    } else {
        console.log(chalk.green('Thank you for playing!'));
        process.exit(0);
    }
}

async function gameLoop() {
    let questionNumber = 1;
    for (const question of questions) {
        await askQuestion(question, questionNumber);
        questionNumber++;
    }
    await endOfGame();
}

await welcome();
await askName();
await gameLoop();
