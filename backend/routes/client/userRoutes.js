/**
 * userRoutes.js
 * @description :: CRUD API routes for user
 */

const express = require('express');
const router = express.Router();
const userController = require('../../controllers/client/userController');
const { PLATFORM } = require('../../constants/authConstant');

router.route('/api/client/v1/user/share-profile/:id').get(userController.getProfile);


module.exports = router;