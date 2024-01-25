/**
 * uploadRoutes.js
 * @description :: upload/download attachment routes
 */

const express = require('express');
const router = express.Router();
const fileUploadController = require('../../controllers/admin/fileUploadController');
const { PLATFORM } = require('../../constants/authConstant');

router.post('/admin/upload', fileUploadController.upload);

module.exports = router;