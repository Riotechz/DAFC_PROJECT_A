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


module.exports = {
    USER_TYPES
}