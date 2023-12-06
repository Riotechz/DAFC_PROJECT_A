/**
 * app.js
 * Use `app.js` to run your app.
 * To start the server, run: `node app.js`.
 */

const express = require('express')
// const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv')
let logger = require('morgan')

dotenv.config({ path: '.env' })

const models = require('./models');
const routes = require('./routes')

const app = express();
app.use(require('./utils/response/responseHandler'));
const httpServer = require('http').createServer(app)

const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// const corsOptions = { origin: process.env.ALLOW_ORIGIN, };
// app.use(cors(corsOptions));
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.success({})
});

models.sequelize.sync({})
    .then(() => { })
    .finally(() => {
        app.use(routes);
        httpServer.listen(process.env.PORT, () => {
            console.log(`Dafc project a is running on ${process.env.PORT}`)
        });

    })