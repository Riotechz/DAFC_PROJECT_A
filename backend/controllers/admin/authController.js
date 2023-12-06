/**
 * authController.js
 * @description :: exports authentication methods
 */


const authConstant = require('../../constants/authConstant');
const validation = require('../../utils/validationRequest');
const userSchemaKey = require('../../utils/validation/userValidation');
const dbService = require('../../utils/dbService');
const { uniqueValidation } = require('../../utils/common');
const models = require('../../models');


/**
 * @description : user registration 
 * @param {Object} req : request for register
 * @param {Object} res : response for register
 * @return {Object} : response for register {status, message, data}
 */
const register = async (req, res) => {
    try {
        let dataToRegister = req.body;
        dataToRegister = {
            ...dataToRegister,
            userType: authConstant.USER_TYPES.Admin
        };

        console.log(dataToRegister)

        let validateRequest = validation.validateParamsWithJoi(
            dataToRegister,
            userSchemaKey.schemaKey,
        );

        if (!validateRequest.isValid) {
            return res.validationError({
                message: `Invalid values in parameters, ${validateRequest.message}`
            })
        }

        let isEmptyPassword = !dataToRegister.password;
        if (isEmptyPassword) {
            isEmptyPassword = true;
            dataToRegister.password = Math.random().toString(36).slice(2);
        }

        let unique = await uniqueValidation(models.user, dataToRegister);
        if (!unique) {
            return res.validationError({ message: 'User Registration Failed, Duplicate Data found.' });
        }

        const result = await dbService.createOne(models.user, {
            ...dataToRegister,
        });

        return res.success({ data: result });

    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
}

/**
 * @description : send email or sms to user with OTP on forgot password
 * @param {Object} req : request for forgotPassword
 * @param {Object} res : response for forgotPassword
 * @return {Object} : response for forgotPassword {status, message, data}
 */
const forgotPassword = async (req, res) => {
    try {
        const params = res.body;

        if (!params.email) {
            return res.badRequest();
        }

        let where = { email: params.email.toString().toLowerCase() };
        let found = await dbService.findOne(models.user, where);

        if (!found) {
            return res.recordNotFound();
        }


    } catch (error) {
        return res.internalServerError({ message: error.message });
    }
}

const login = (req, res) => {

}


module.exports = {
    register,
};