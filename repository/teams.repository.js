'use strict'
const Team = require('./models/teams.model')

const findTeams = async (teamName) => {
    return Team.find({...(teamName && {name: teamName})})
}
const createTeams = async (teamsArr) => {
    const teams = await Promise.all(teamsArr.map(team => Team.create(team)))
    await Promise.all(teams.map(team => team.save()))
}

module.exports = {
    createTeams,
    findTeams
}