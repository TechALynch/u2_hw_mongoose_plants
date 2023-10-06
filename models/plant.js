const mongoose = require('mongoose')
const  { Schema } = require('mongoose') //getting schema from mongoose libary and deconstrcting it to use 

const PlantSchema = new Schema( //needs capitial fisrt letter 
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('plant', PlantSchema)