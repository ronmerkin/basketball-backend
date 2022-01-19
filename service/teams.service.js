'use strict'

const { findTeams } = require('../repository/teams.repository')
const getTeams = async (team = undefined) => {
    try {
        const teams = await findTeams(team)
        if (!teams || !teams.length) {
            throw new Error('No team Found')
        }
        // add settimeout in order to be able to display proper loading on frontend side
        await new Promise(resolve => setTimeout(resolve, 3000))
        return teams
    } catch (err) {
        throw err
    }
}

module.exports = {
    getTeams
}