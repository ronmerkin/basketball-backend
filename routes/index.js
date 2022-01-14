'use strict'

const { getTeams } = require('../controller/teams.controller')

const createRourtes = (app) => {
    app.get('/teams', getTeams)
}

module.exports = createRourtes;