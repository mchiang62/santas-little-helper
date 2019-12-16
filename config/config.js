/* eslint-disable camelcase */
module.exports = {
    development: {
        username: 'root',
        password: '',
        database: 'santa_DB',
        host: 'localhost',
        port: 3306,
        dialect: 'mysql',
    },

    production: {
        use_env_variable: 'JAWSDB_URL',
        dialect: 'mysql',
    },
};
