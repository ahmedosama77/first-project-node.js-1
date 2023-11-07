const express = require('express');
const mongoose = require('mongoose');

let app = express();

mongoose.connect("mongodb://localhost:27017/your-database", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
});

let userModel = new mongoose.model("users", userSchema);

const coursesSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
    Degree: String,
    address: String,
});

let coursesModel = new mongoose.model("courses", coursesSchema); // Use a different variable name

let newCourse = new coursesModel({
    name: "Ahmed osama",
    age: 21,
    phone: "01270627474",
    Degree: "A+",
    address: "Ard l gamyaat",
}).save();

let newUser = new userModel({
    name: "Ahmed osama",
    age: 21,
    password: 21072002,
    phone: "01270627474",
}).save();

mongoose.connection.on('connected', () => {
    console.log("Database is now connected");
});

mongoose.connection.on('error', (err) => {
    console.log("Database connection error: " + err);
});

app.listen(3000, () => {
    console.log('Server is open');
});