/**
 * dbFactory.js
 * @description :: exports values used to make connection with SQL database
 */

if (process.env.NODE_ENV == 'production') {
    module.exports = {
        HOST: process.env.HOST,
        USER: process.env.DATABASE_USERNAME,
        PASSWORD: process.env.DATABASE_PASSWORD,
        DB: process.env.DATABASE_NAME,
        dialect: 'mssql',
        port: process.env.DB_PORT,
    };
} else if (process.env.NODE_ENV == 'uat') {
    module.exports = {
        HOST: process.env.UAT_HOST,
        USER: process.env.UAT_DATABASE_USERNAME,
        PASSWORD: process.env.UAT_DATABASE_PASSWORD,
        DB: process.env.UAT_DATABASE_NAME,
        dialect: 'mssql',
        port: process.env.UAT_DB_PORT,
    };
} else {
    module.exports = {
        HOST: process.env.DEV_HOST,
        USER: process.env.DEV_DATABASE_USERNAME,
        PASSWORD: process.env.DEV_DATABASE_PASSWORD,
        DB: process.env.DEV_DATABASE_NAME,
        dialect: 'mysql',
        port: process.env.DEV_DB_PORT,
    };
}
