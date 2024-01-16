/**
 * auth.js
 * @description :: express routes of authentication APIs
 */

const express = require('express');
const routes = express.Router();
const authController = require('../../controllers/admin/authController');
const { PLATFORM } = require('../../constants/authConstant');

routes.route('/register').post(authController.register);
routes.route('/login').post(authController.login);


module.exports = routes;