//Import Database Models
const db = require('../models');

const users = [
    {
        email: 'abc@gmail.com',
        password: '1234',
        firstName: 'John',
        lastName: 'Doe',
    },
    {
        email: '123@gmail.com',
        password: '4567',
        firstName: 'Jane',
        lastName: 'Doe',
    },
];

db.sequelize.sync({ force: true }).then(function() {
    db.User.bulkCreate(users)
        .then(function(rows) {
            console.log('\n\nINSERTED\n\n');
            console.log(rows);
        })
        .catch(function(err) {
            console.log('\n\nError:', err);
        });
});
