const { Schema, model } = require('mongoose')

const TeamsSchema = new Schema({
     name: String,
     full_name: String,
     logo: String,
     players: [{
          name: String,
          age: Number,
          position: String,
     }]
})

module.exports = model('Teams', TeamsSchema)