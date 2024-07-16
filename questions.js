export const questions = [
    {
        question: 'Node.js allows you to run JavaScript on the browser.\n',
        choices: [
            'True',
            'False'
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'When using console.log() in Node.js, in order to see the logs, you need to open a browser developer tool and view the console.\n',
        choices: [
            'True',
            'False'
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'Node.js uses asynchronous programming.\n',
        choices: [
            'True',
            'False'
        ],
        correctAnswerIndex: 0
    },
    {
        question: 'HTTP response codes that start with a 2 mean what?\n',
        choices: [
            'Client Error',
            'Success',
            'Server Error',
            'Redirect'
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'The defined port used for Node.js http servers is:\n',
        choices: [
            '8080',
            '80',
            '443',
            '3000'
        ],
        correctAnswerIndex: 0
    },
    {
        question: 'What does the HTTP method HEAD do?\n',
        choices: [
            'Identical to PUT and is idempotent',
            'Identical to GET but without the response body',
            'Requests for headers only',
        ],
        correctAnswerIndex: 1
    },
    {
        question: 'Which command will create a package.json file?\n',
        choices: [
            'npm init',
            'nodemon init',
            'node init',
            'express init',
        ],
        correctAnswerIndex: 0
    },
    {
        question: 'If https://localhost:3000 wants to communicate to http://localhost:3000 will this violate the Same-Origin Policy?\n',
        choices: [
            'Yes',
            'No',
        ],
        correctAnswerIndex: 0
    },
    {
        question: 'What does nodemon do for us?\n',
        choices: [
            'Restarts our server as soon as we make a change in any of our files',
            'Monitors Node.js and alerts us of any issues',
            'Captures our computer data and sends it to third parties for performance enhancements',
        ],
        correctAnswerIndex: 0
    },
    {
        question: 'How do we create an Express route for deleting on path zelda?\n',
        choices: [
            `app.get('/zelda', () => { ... }); `,
            `app.post('zelda', () => { ... });`,
            `app.delete('zelda', () => { ... });`,
            `app.delete('/zelda', () => { ... });`,
        ],
        correctAnswerIndex: 3
    },
];