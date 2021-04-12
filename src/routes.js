const Joi = require('joi');
const {
    addBookController,
    getAllBookController,
    getBookByIdController,
    updateBookController,
    deleteBookController,
} = require('./controllers');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookController,
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().min(1),
                    year: Joi.number(),
                    author: Joi.string(),
                    summary: Joi.string(),
                    publisher: Joi.string(),
                    pageCount: Joi.number().min(1),
                    readPage: Joi.number().optional(),
                    reading: Joi.boolean(),
                }),
            },
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBookController,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdController,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookController,
        options: {
            validate: {
                payload: Joi.object({
                    name: Joi.string().min(1),
                    year: Joi.number(),
                    author: Joi.string(),
                    summary: Joi.string(),
                    publisher: Joi.string(),
                    pageCount: Joi.number().min(1),
                    readPage: Joi.number().optional(),
                    reading: Joi.boolean(),
                }),
            },
            cors: {
                origin: ['*'],
            },
        },
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookController,
    },
];

module.exports = routes;
