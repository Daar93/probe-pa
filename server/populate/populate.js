/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const names = require("./names.json");
const levels = require("./levels.json");
const positions = require("./positions.json");
const hobbies = require("./hobbies.json");
const EmployeeModel = require("../db/employee.model");
const HobbyModel = require("../db/hobby.model");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateHobbies = async () => {
  await HobbyModel.deleteMany({});


  const allHobies = hobbies.map((hobby) => ({
    name: hobby.name,
    description: hobby.description
  }));

  await HobbyModel.create(... allHobies);
  console.log("Hobbies created");
};
const populateEmployees = async () => {
  await EmployeeModel.deleteMany({});

  const allHobbies = await HobbyModel.find();
  console.log(allHobbies[0]);

  const employees = names.map((name) => ({
    name,
    level: pick(levels),
    position: pick(positions),
    hobby: pick(allHobbies)["_id"]
  }));

  // console.log(allHobbies)
  // console.log(levels);
  // console.log(employees);

  await EmployeeModel.create(...employees);
  console.log("Employees created");
};


const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateHobbies();
  
  await populateEmployees();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
