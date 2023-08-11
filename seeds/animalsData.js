const { Animals } = require('../models');

const animalsData = [
    {
        name: "Fluffy",
        age: 2
    }
];

const seedAnimals = () => Animals.bulkCreate(animalsData);

module.exports = seedAnimals;