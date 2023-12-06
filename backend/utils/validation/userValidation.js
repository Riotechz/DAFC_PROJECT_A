/**
 * userValidation.js
 * @description :: validate each post and put request as per user model
 */

const joi = require('joi');

exports.schemaKey = joi.object({
    username: joi.string().min(3).max(30).required(),
    password: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    fistName: joi.string().max(100).allow(null).allow(''),
    lastName: joi.string().max(100).allow(null).allow(''),
    dislayName: joi.string().max(100).allow(null).allow(''),
    mobileNo: joi.string().allow(null).allow(''),
    telNo: joi.string().allow(null).allow(''),
    faxNo: joi.string().allow(null).allow(''),
    userType: joi.any().required(),
});