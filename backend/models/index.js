/**
 * index.js
 * @description :: exports all the models and its relationships among other models
 */

const dbConnection = require('../config/dbConnection');
const db = {};
db.sequelize = dbConnection;

db.user = require('./user');
db.userAuthSettings = require('./userAuthSettings');
db.userRole = require('./userRole');
db.userToken = require('./userToken');
db.activityLog = require('./activityLog');



//user auth
db.userAuthSettings.belongsTo(db.user, {
    foreignKey: 'userId',
    as: '_userId',
    targetKey: 'id'
});
db.user.hasMany(db.userAuthSettings, {
    foreignKey: 'userId',
    sourceKey: 'id'
});
db.userAuthSettings.belongsTo(db.user, {
    foreignKey: 'addedBy',
    as: '_addedBy',
    targetKey: 'id'
});
db.user.hasMany(db.userAuthSettings, {
    foreignKey: 'addedBy',
    sourceKey: 'id'
});
db.userAuthSettings.belongsTo(db.user, {
    foreignKey: 'updatedBy',
    as: '_updatedBy',
    targetKey: 'id'
});
db.user.hasMany(db.userAuthSettings, {
    foreignKey: 'updatedBy',
    sourceKey: 'id'
});

//user roles
db.userRole.belongsTo(db.user, {
    foreignKey: 'userId',
    as: '_userId',
    targetKey: 'id'
});
db.user.hasMany(db.userRole, {
    foreignKey: 'userId',
    sourceKey: 'id'
});

//user tokens
db.userToken.belongsTo(db.user, {
    foreignKey: 'userId',
    as: '_userId',
    targetKey: 'id'
});
db.user.hasMany(db.userToken, {
    foreignKey: 'userId',
    sourceKey: 'id'
});
db.userToken.belongsTo(db.user, {
    foreignKey: 'addedBy',
    as: '_addedBy',
    targetKey: 'id'
});
db.user.hasMany(db.userToken, {
    foreignKey: 'addedBy',
    sourceKey: 'id'
});
db.userToken.belongsTo(db.user, {
    foreignKey: 'updatedBy',
    as: '_updatedBy',
    targetKey: 'id'
});
db.user.hasMany(db.userToken, {
    foreignKey: 'updatedBy',
    sourceKey: 'id'
});






module.exports = db;