/**
 * user.js
 * @description :: sequelize model of database table user
 */

const {
    DataTypes, Op
} = require('sequelize');
const sequelize = require('../config/dbConnection');
const sequelizePaginate = require('sequelize-paginate');
const sequelizeTransforms = require('sequelize-transforms');
const bcrypt = require('bcrypt');
let User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    displayName: { type: DataTypes.STRING },
    mobileNo: { type: DataTypes.STRING },
    telNo: { type: DataTypes.STRING },
    faxNo: { type: DataTypes.STRING },
    position: { type: DataTypes.STRING },
    urlAvatar: { type: DataTypes.STRING },
    userType: {
        type: DataTypes.INTEGER,
        required: true
    },
    isActive: { type: DataTypes.BOOLEAN },
    createdAt: { type: DataTypes.DATE },
    updatedAt: { type: DataTypes.DATE },
    addedBy: { type: DataTypes.INTEGER },
    updatedBy: { type: DataTypes.INTEGER },
    isDeleted: { type: DataTypes.BOOLEAN },
}
    , {
        hooks: {
            beforeCreate: [
                async function (user, options) {
                    if (user.password) {
                        user.password =
                            await bcrypt.hash(user.password, 8);
                    }
                    user.isActive = true;
                    user.isDeleted = false;

                },
            ],
            afterCreate: [
                async function (user, options) {
                    sequelize.model('userAuthSettings').create({ userId: user.id });
                },
            ],
        }
    }
);
User.prototype.isPasswordMatch = async function (password) {
    const user = this;
    return bcrypt.compare(password, user.password);
};
User.prototype.toJSON = function () {
    let values = Object.assign({}, this.get());
    delete values.password;
    return values;
};
sequelizeTransforms(User);
sequelizePaginate.paginate(User);
module.exports = User;
