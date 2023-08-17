const { Animals } = require('../models');

const animalsData = [
    {
        animalType: "cat",
        name: "Willow",
        age: 2,
        sex: "female",
        breed: "Tabby",
        specialNeeds: "Only Drinks Sparkling water",
        location: "Portland, OR",
        filename: "cat1.jpg",
        description: "Cat standing in grass",
        petOfTheMonth: false,
        voteCount: 20
    },
    {
        animalType: "cat",
        name: "Whomping",
        age: 4,
        sex: "female",
        breed: "Calico",
        specialNeeds: "Allergic to Kids",
        location: "Astoria, OR",
        filename: "cat2.jpg",
        description: "Cat sleeping on mug",
        petOfTheMonth: false,
        voteCount: 100
    },
    {
        animalType: "cat",
        name: "Wedge",
        age: 1,
        sex: "male",
        breed: "Short-Hair",
        specialNeeds: "Thinks he is a bat.",
        location: "Cottage Grove, OR",
        filename: "cat3.jpg",
        description: "Cat with bat wings on.",
        petOfTheMonth: false,
    },
    {
        animalType: "cat",
        name: "Walter",
        age: 8,
        sex: "female",
        breed: "Short-Hair",
        specialNeeds: "Special Diet: Gluten Free",
        location: "Roseburg, OR",
        filename: "cat4.jpg",
        description: "Cat hiding in bag",
        petOfTheMonth: false,
    },
    {
        animalType: "cat",
        name: "Winston",
        age: 7,
        sex: "male",
        breed: "Tabby",
        specialNeeds: "Extra belly rubs.",
        location: "Forest Grove, OR",
        filename: "cat5.jpg",
        description: "Cat headshot",
        petOfTheMonth: true,
    },
    {
        animalType: "dog",
        name: "Sir Podrick",
        age: 2,
        sex: "male",
        breed: "Chihuahua",
        specialNeeds: "Really loves Halloween.",
        location: "Estacada, OR",
        filename: "dog1.jpg",
        description: "Dog in witch costume",
        petOfTheMonth: false,
        voteCount: 50
    },
    {
        animalType: "dog",
        name: "Sisu",
        age: 3,
        sex: "female",
        breed: "German Shepard",
        specialNeeds: "Bad hip",
        location: "Portland, OR",
        filename: "dog2.jpg",
        description: "dog laying down",
        petOfTheMonth: false,
    },
    {
        animalType: "dog",
        name: "Sky",
        age: 1,
        sex: "male",
        breed: "Pittbull",
        specialNeeds: "N/A",
        location: "Portland, OR",
        filename: "dog3.jpg",
        description: "dog snuggling",
        petOfTheMonth: false,
    },
    {
        animalType: "dog",
        name: "Anya",
        age: 10,
        sex: "female",
        breed: "Husky",
        specialNeeds: "Special Diet: food imported from Italy only",
        location: "Beaverton, OR",
        filename: "dog4.jpg",
        description: "dog headshot",
        petOfTheMonth: false,
    }
];

const seedAnimals = () => Animals.bulkCreate(animalsData);

module.exports = seedAnimals;