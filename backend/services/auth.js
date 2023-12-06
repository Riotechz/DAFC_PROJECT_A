/**
 * auth.js
 * @description :: service functions used in authentication
 */

const model = require('../model/index');
const dbService = require('../utils/dbService');
const jwt = require('jsonwebtoken');
const {
    JWT
} = require('../constants/authConstant');
const models = require('../models');
const bcrypt = require('bcrypt');


/**
 * @description : service to generate JWT token for authentication.
 * @param {obj} user : user who wants to login.
 * @param {string} secret : secret for JWT.
 * @return {string}  : returns JWT token.
 */
const generateToken = async (user, secret) => {
    return jwt.sign({
        id: user.id,
        'username': user.username
    }, secret, { expiresIn: JWT.expiresIn * 600 });
}

let auth = module.exports = {};

/**
 * @description : service of login user.
 * @param {string} username : username of user.
 * @param {string} password : password of user.
 * @param {string} platform : platform.
 * @param {boolean} roleAccess: a flag to request user`s role access
 * @return {obj} : returns authentication status. {flag, data}
 */
auth.loginUser = async (username, passord, platform, roleAccess) => {
    try {

    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 * @description : service to change password.
 * @param {obj} params : object of new password, old password and user`s id.
 * @return {obj}  : returns status of change password. {flag,data}
 */
auth.changePassword = async (params) => {
    try {
        let password = params.password;
        let oldPassword = params.oldPassword;
        let where = { id: params.id }
        let user = await dbService.findOne(models.user, where);
        if (!user || !user.id) {
            return {
                flag: true,
                data: "User not found"
            }
        }

        const isPasswordMatched = await user.isPasswordMatched(oldPassword)
        if (!isPasswordMatched) {
            return {
                flag: true,
                data: "Incorrect Old Password"
            };
        }

        password = await bcrypt.hash(password, 8);
        let updateUser = dbService.updateByPk(models.user, user.id, { password: password });
        if (!updateUser) {
            return {
                flag: true,
                data: "password can not changed due to some error.please try again"
            };
        }

        return {
            flag: false,
            data: 'Password changed successfully'
        };

    } catch (error) {
        throw new Error(error.message);
    }
};

/**
 * @description : service to reset password.
 * @param {obj} userId : user`s id 
 * @param {string} newPassword : new password to be set.
 * @return {}  : returns status whether new password is set or not. {flag, data}
 */
auth.resetPassword = async (userId, newPassword) => {
    try {
        let where = { id: userId };
        const dbUser = await dbService.findOne(models.user, where);
        if (!dbUser) {
            return {
                flag: true,
                data: 'User not found',
            };
        }
        newPassword = await bcrypt.hash(newPassword, 8);
        let updatedUser = await dbService.updateByPk(models.user, userId, { password: newPassword });
        if (!updatedUser) {
            return {
                flag: true,
                data: 'Password is not reset successfully',
            };
        }
        await dbService.updateMany(models.userAuthSettings, { userId: userId }, {
            resetPasswordCode: '',
            expiredTimeOfResetPasswordCode: null,
            loginRetryLimit: 0
        });
        //start send mail here end//
        return {
            flag: false,
            data: 'Password reset successfully',
        };

    } catch (error) {
        throw new Error(error.message);
    }
}