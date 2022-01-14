'use strict'

const { findTeams } = require('../repository/teams.repository')
const getTeams = async () => {
    try {
        return await findTeams()
    } catch (err) {
        throw new Error('No team Found')
    }
}

module.exports = {
    getTeams
}