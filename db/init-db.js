const mongoose = require('mongoose')
const DB_HOST_URI = process.env.DB_HOST

const initDB = () => {
    mongoose
        .connect(
            DB_HOST_URI,
            { useNewUrlParser: true, useUnifiedTopology: true}
        )
        .then(() => {
            console.log('MongoDB Connected')
        })
        .catch(err => console.log('error connecting to DB: ', err))
}

module.exports = {
    initDB
}
