'use strict'

const { findTeams } = require('../repository/teams.repository')
const getTeams = async (team = undefined) => {
    try {
        return await findTeams(team)
    } catch (err) {
        throw new Error('No team Found')
    }
}

module.exports = {
    getTeams
}