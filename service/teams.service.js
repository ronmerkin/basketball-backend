'use strict'

const { findTeams } = require('../repository/teams.repository')
const getTeams = async (team = undefined) => {
    try {
        const teams = await findTeams(team)
        if (!teams || !teams.length) {
            throw new Error('No team Found')
        }
        return teams
    } catch (err) {
        throw err
    }
}

module.exports = {
    getTeams
}