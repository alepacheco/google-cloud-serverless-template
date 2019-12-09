import {NAME} from './utils';

export const myFunction = (request, response) => {
    response.status(200).send(`Hello World from TS!. ${NAME}`);
};

export const event = (event, callback) => {
    callback();
};