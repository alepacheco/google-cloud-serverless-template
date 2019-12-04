export const myFunction = (request, response) => {
    response.status(200).send('Hello World from TS!');
};

export const event = (event, callback) => {
    callback();
};