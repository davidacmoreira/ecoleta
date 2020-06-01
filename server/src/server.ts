import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('here');

    response.json([
        "eu",
        "tu",
        "ele"
    ]);
});

app.listen(3333);