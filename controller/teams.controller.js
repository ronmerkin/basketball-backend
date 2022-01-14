'use strict'
const teamsService = require('../service/teams.service')

const getTeams = async (req, res, next) => {
    try {
        const { team } = req.query
        const teams = await teamsService.getTeams(team)
        res.status(200).json(teams)
    } catch (err) {
        res.status(404).send(err.message)
    }
}

module.exports = {
    getTeams
}
