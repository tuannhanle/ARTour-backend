// config
const database = require('./config/database');
const mongoose = require('mongoose');


module.exports = () => {
    // database connect
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.connect(database.url, database.setting)
        .then(() => {
            console.log('Connected mongodb server');
        })
        .catch(err => {
            console.log('Can not connect to mongodb: ' + err);
        })
}