const { Cat } = require('../models');

const catData = [
    {
        sex: "Female",
        breed: "Long Hair Tabby",
        specialNeeds: "Will only drink sparkling water. Allergic to kids.",
        age: 2,
        location: "Portland,OR",
        },
    {
        sex: "Female",
        breed: "Calico",
        specialNeeds: "N/A",
        age: 1,
        location: "Astoria, OR",
        },
    {
        sex: "Male",
        breed: "Short Hair",
        specialNeeds: "Thinks he is a bat.",
        age: 6,
        location: "Cottage Grove, OR",

    },
    {
        sex: "Female",
        breed: "Short Hair",
        specialNeeds: "Special Diet",
        age: 6,
        location: "Roseburg, OR",
        },
    {
        sex: "Male",
        breed: "Long Hair Tabby",
        specialNeeds: "N/A",
        age: 7,
        location: "ForestGrove, OR",
        }
    
];

const seedCats = () => Cat.bulkCreate(catData);

module.exports = seedCats;