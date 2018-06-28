const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const itemSeed = [
  {
    "id": 1,
    "name": "beth",
    "image": "./assets/beth.png",
    "value": "15.00",
    "location": "Sandy, UT"
  },
  {
    "id": 2,
    "name": "birdperson",
    "image": "./assets/birdperson.png",
    "value": "278.00",
    "location": "Salt Lake City, UT"
  },
  {
    "id": 3,
    "name": "evilmorty",
    "image": "./assets/evilmorty.png",
    "value": "4.00",
    "location": "New York, NY"
  },
  {
    "id": 4,
    "name": "gainthead",
    "image": "./assets/gainthead.png",
    "value": "69.00",
    "location": "Jersey City, NJ"
  },
  {
    "id": 5,
    "name": "goldenford",
    "image": "./assets/goldenford.png",
    "value": "104.00",
    "location": "Salt Lake City, UT"
  },
  {
    "id": 6,
    "name": "jerry",
    "image": "./assets/jerry.png",
    "value": "25.00",
    "location": "Providence, RI"
  },
  {
    "id": 7,
    "name": "jessica",
    "image": "./assets/jessica.png",
    "value": "99.99",
    "location": "Charlotte, NC"
  },
  {
    "id": 8,
    "name": "meeseeks",
    "image": "./assets/meeseeks.png",
    "value": "75.00",
    "location": "Indianapolis, IN"
  },
  {
    "id": 9,
    "name": "morty",
    "image": "./assets/morty.png",
    "value": "52.60",
    "location": "Cheyenne, WY"
  },
  {
    "id": 10,
    "name": "mr",
    "image": "./assets/mr.png",
    "value": "48.62",
    "location": "San Francisco, CA"
  },
  {
    "id": 11,
    "name": "rick",
    "image": "./assets/rick.png",
    "value": "26.05",
    "location": "Chicago, IL"
  },
  {
    "id": 12,
    "name": "summer",
    "image": "./assets/summer.png",
    "value": "108.08",
    "location": "Las Vegas, NV"
  }
]

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
