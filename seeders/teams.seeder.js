const Teams = require('../repository/models/teams.model')
const { Seeder } = require('mongoose-data-seed')
const data = require('./data/teams.data.json')

class TeamsSeeder extends Seeder {
    async shouldRun() {
        return Teams.countDocuments()
            .exec()
            .then(count => count === 0);
    }

    async run() {
        return Teams.create(data);
    }
}

module.exports = TeamsSeeder