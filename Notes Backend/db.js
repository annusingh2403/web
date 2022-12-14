const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/notes?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('Server Connected Successfully');
    })
}

module.exports = connectToMongo;