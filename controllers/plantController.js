const Plant = require('../models/plant');

module.exports = {
    getAllPlants,
    getOnePlant,
    createPlant,
    updatePlant,
    deletePlant
}

async function deletePlant(req, res){
    try{
        const { id } = req.params;
        const deleted = await Plant.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Plant deleted");
        }
        throw new Error("Plant not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

async function updatePlant(req, res){
    try{
        const id = req.params.id
        const plant = await Plant.findByIdAndUpdate(id, req.body, {new: true})
        if(plant){
            return res.status(200).json(plant)
        }
        throw new Error('Plant not found')
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

// const getAllPlants = async (req, res) => { // cant use a variable untill decleared
    async function getAllPlants(req, res) { // This allows you to hoist your function (use it anywhere) in code
    try {
        const plants = await Plant.find()
        return res.json(plants)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

// const getOnePlant = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const plant = await Plant.findById(id)
//         if (plant) {
//             res.json(plant);
//         }
//         return res.status(404).send('Plant with the specified ID does not exists');
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

// function expression
async function getOnePlant(req, res) {
    try{
        const id = req.params.id
        const plant = await Plant.findById(id)
        if(plant){
            return res.json(plant)
        }
        return res.status(404).send('Plant with specified ID does not exsits.')
    }catch (error){
        return res.status(500).send(error.message)
    }
}

async function createPlant(req, res) {
    try {
        const plant = await new Plant(req.body)// takes the data of the plant and creates a new plant
        await plant.save()
        return res.status(201).json({
            plant
        })
    }catch (error){
        return res.status(500).send(error.message)
    }
}

