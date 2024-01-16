/**
 * authConstant.js
 * @description :: constants used in authentication
 */

const USER_TYPES = {
    User: 1,
    Admin: 2
};

const JWT = {
    ADMIN_SECRET: 'dafc_project_a',
    DEVICE_SECRET: 'dafc_project_a',
    CLIENT_SECRET: 'dafc_project_a',
    EXPIRES_IN: 10000
}

const PLATFORM = {
    ADMIN: 1,
    DEVICE: 2,
    CLIENT: 3,
};

const MAX_LOGIN_RETRY_LIMIT = 3;

let LOGIN_ACCESS = {
    [USER_TYPES.Admin]: [PLATFORM.ADMIN],
    [USER_TYPES.User]: [PLATFORM.DEVICE, PLATFORM.CLIENT],
};


module.exports = {
    USER_TYPES,
    PLATFORM,
    JWT,
    MAX_LOGIN_RETRY_LIMIT,
    LOGIN_ACCESS,

}