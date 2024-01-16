/**
 * auth.js
 * @description :: service functions used in authentication
 */

const model = require('../models/index');
const dbService = require('../utils/dbService');
const jwt = require('jsonwebtoken');
const {
    JWT, MAX_LOGIN_RETRY_LIMIT, PLATFORM, LOGIN_ACCESS
} = require('../constants/authConstant');
const models = require('../models');
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const dayjs = require('dayjs');


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
    }, secret, { expiresIn: JWT.EXPIRES_IN * 600 });
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
auth.loginUser = async (username, password, platform, roleAccess) => {
    try {
        let where = { [Op.or]: [{ username: username }, { email: username }] };
        const user = await dbService.findOne(model.user, where);
        if (!user) {
            return {
                flag: true,
                data: 'User not exists'
            };
        }
        let userAuth = await dbService.findOne(model.userAuthSettings, { userId: user.id })
        if (userAuth && userAuth.loginRetryLimit >= MAX_LOGIN_RETRY_LIMIT) {
            let now = dayjs();
            if (userAuth.loginReactiveTime) {
                let limitTime = dayjs(userAuth.loginReactiveTime);
                if (limitTime > now) {
                    let expireTime = dayjs().add(LOGIN_REACTIVE_TIME, 'minute');
                    if (!(limitTime > expireTime)) {
                        return {
                            flag: true,
                            data: `you have exceed the number of limit.you can login after ${common.getDifferenceOfTwoDatesInTime(now, limitTime)}.`
                        };
                    }
                    await dbService.updateMany(model.userAuthSettings, { userId: user.id }, {
                        loginReactiveTime: expireTime.toISOString(),
                        loginRetryLimit: userAuth.loginRetryLimit + 1
                    });
                    return {
                        flag: true,
                        data: `you have exceed the number of limit.you can login after ${common.getDifferenceOfTwoDatesInTime(now, expireTime)}.`
                    };
                } else {
                    await dbService.updateMany(model.userAuthSettings, { userId: user.id }, {
                        loginReactiveTime: null,
                        loginRetryLimit: 0
                    });
                    userAuth = await dbService.findOne(model.userAuthSettings, { userId: user.id });
                }
            } else {
                // send error
                let expireTime = dayjs().add(LOGIN_REACTIVE_TIME, 'minute');
                await dbService.updateMany(model.userAuthSettings, { userId: user.id }, {
                    loginReactiveTime: expireTime.toISOString(),
                    loginRetryLimit: userAuth.loginRetryLimit + 1
                });
                return {
                    flag: true,
                    data: `you have exceed the number of limit.you can login after ${common.getDifferenceOfTwoDatesInTime(now, expireTime)}.`
                };
            }
        }
        if (password) {
            let isPasswordMatched = await user.isPasswordMatch(password);
            if (!isPasswordMatched) {
                await dbService.updateMany(model.userAuthSettings, { userId: user.id }, { loginRetryLimit: userAuth.loginRetryLimit + 1 });
                return {
                    flag: true,
                    data: 'Incorrect Password'
                };
            }
        }
        const userData = user.toJSON();
        let token;
        if (!user.userType) {
            return {
                flag: true,
                data: 'You have not assigned any role'
            };
        }
        if (platform == PLATFORM.ADMIN) {
            if (!LOGIN_ACCESS[user.userType].includes(PLATFORM.ADMIN)) {
                return {
                    flag: true,
                    data: 'you are unable to access this platform'
                };
            }
            token = await generateToken(userData, JWT.ADMIN_SECRET);
        }
        else if (platform == PLATFORM.DEVICE) {
            if (!LOGIN_ACCESS[user.userType].includes(PLATFORM.DEVICE)) {
                return {
                    flag: true,
                    data: 'you are unable to access this platform'
                };
            }
            token = await generateToken(userData, JWT.DEVICE_SECRET);
        }
        else if (platform == PLATFORM.CLIENT) {
            if (!LOGIN_ACCESS[user.userType].includes(PLATFORM.CLIENT)) {
                return {
                    flag: true,
                    data: 'you are unable to access this platform'
                };
            }
            token = await generateToken(userData, JWT.CLIENT_SECRET);
        }
        if (userAuth && userAuth.loginRetryLimit) {
            await dbService.updateMany(model.userAuthSettings, { userId: user.id }, {
                loginRetryLimit: 0,
                loginReactiveTime: null
            });
        }
        let expire = dayjs().add(JWT.EXPIRES_IN, 'second').toISOString();
        await dbService.createOne(model.userToken, {
            userId: user.id,
            token: token,
            tokenExpiredTime: expire
        });
        let userToReturn = {
            ...userData,
            ...{ token }
        };
        let roleAccessData = {};
        if (roleAccess) {
            roleAccessData = await common.getRoleAccessData(model, user.id);
            userToReturn = {
                ...userToReturn,
                roleAccess: roleAccessData
            };
        }
        return {
            flag: false,
            data: userToReturn
        };

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