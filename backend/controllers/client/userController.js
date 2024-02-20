/**
 * userController.js
 * @description :: eexports action methods for user.
 */


const { Op } = require('sequelize')
const User = require("../../models/user");
const userSchemaKey = require("../../utils/validation/userValidation");
const validation = require("../../utils/validateRequest");
const dbService = require("../../utils/dbService");
const auth = require("../../services/auth");
const models = require("../../models");


/**
* @description : find record of User from table by id;
* @param {Object} req : request including id in request params.
* @param {Object} res : response contains record retrieved from table.
* @return {Object} : found User. {status, message, data}
*/
const getUser = async (req, res) => {
    try {
        let options = {}
        let id = req.params.id
        let foundUser = await dbService.findByPk(User, id, options);
        if (!foundUser) {
            return res.recordNotFound();
        }
        return res.success({ data: foundUser });

    }
    catch (error) {
        return res.internalServerError()
    }
}

/**
* @description : find record of User from table by id;
* @param {Object} req : request including id in request params.
* @param {Object} res : response contains record retrieved from table.
* @return {Object} : found User. {status, message, data}
*/
const getProfile = async (req, res) => {
    try {
        let id = req.params.id
        let where = { [Op.or]: [{ username: id }, { mobileNo: id }] };
        let foundUser = await dbService.findOne(User, where);
        if (!foundUser) {
            return res.recordNotFound();
        }
        return res.success({ data: foundUser });

    }
    catch (error) {
        return res.internalServerError()
    }
}

module.exports = {
    getUser,
    getProfile,
}