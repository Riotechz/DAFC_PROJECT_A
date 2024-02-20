/**
 * index route file of admin platform.
 * @description: exports all routes of admin platform.
 */

const express = require('express');
const router = express.Router();

router.use('/api/admin/auth', require('./auth'));
router.use('/api', require('./uploadRoutes'));
router.use('/api', require('./userRoutes'));

module.exports = router;