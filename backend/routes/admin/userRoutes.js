/**
 * userRoutes.js
 * @description :: CRUD API routes for user
 */

const express = require('express');
const router = express.Router();
const userController = require('../../controllers/admin/userController');
const { PLATFORM } = require('../../constants/authConstant');
const auth = require('../../middlewares/auth');

router.route('/admin/user/me').get(auth(PLATFORM.ADMIN), userController.getLoggedInUserInfo);

module.exports = router;