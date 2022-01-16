const { Schema, model } = require('mongoose')

const TeamsSchema = new Schema({
     name: String,
     full_name: String,
     logo: String,
     coach: {
          name: String,
          profile: String
     },
     players: [{
          name: String,
          age: Number,
          position: String,
          profile: String
     }]
})

module.exports = model('Teams', TeamsSchema)