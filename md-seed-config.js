require('dotenv').config()
const mongoose = require('mongoose')
const mongoURL = process.env.DB_HOST || 'mongodb://localhost:27017/dbname'
const teamsSeeders = require('./seeders/teams.seeder')
/**
 * Seeders List
 * order is important
 * @type {Object}
 */
const seedersList = {
    teamsSeeders
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
const connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
const dropdb = async () => mongoose.connection.db.dropDatabase();

module.exports = {
    seedersList,
    connect,
    dropdb
}
