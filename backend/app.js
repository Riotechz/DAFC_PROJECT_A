/**
 * app.js
 * Use `app.js` to run your app.
 * To start the server, run: `node app.js`.
 */

const express = require('express')
const dotenv = require('dotenv')
let logger = require('morgan')

dotenv.config({ path: '.env' })

const models = require('./models');

const app = express();
const httpServer = require('http').createServer(app)

app.use(logger('dev'))

app.get('/', (req, res) => {
    res.status(200).json('dđ')
});

models.sequelize.sync({})
    .then(() => { })
    .finally(() => {

        httpServer.listen(process.env.PORT, () => {
            console.log(`Dafc project a is running on ${process.env.PORT}`)
        });

    })