require('dotenv').config(); // this is important!

module.exports = {
    "development": {
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_DATABASE,
        "host": process.env.DB_HOST,
        "port": 3307,
        "dialect": "mysql"
    },

    "production": {
        "username": "lg33dfs017hlqrz3",
        "password": "s9cc4b7h1xfupr5d",
        "database": "c6qhxrwo1qa3bx74",
        "host": process.env.DB_HOST,
        "port": 3306,
        "dialect": "mysql",
        "use_env_variable": process.env.JAWSDB_URL

    }
};


// var mysql = require('mysql');
// var connection;

// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         // "username": process.env.DB_USERNAME,
//         // "password": process.env.DB_PASSWORD,
//         // "database": process.env.DB_DATABASE,
//         // "host": process.env.DB_HOST,
//         // "port": 3307,
//         // "dialect": "mysql"

//     });
// };

// connection.connect(function (err) {
//     if (err) {
//         console.error("error connecting: " + err.message)
//         return;
//     }
//     console.log("connected as id " + connection.threadId)
// });

// module.exports = connection;