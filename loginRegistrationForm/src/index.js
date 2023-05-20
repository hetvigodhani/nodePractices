const express = require('express');
const app = express();
const port = process.env.PORT || 1600;
const path = require("path");
const hbs = require("hbs");
const Register = require("./mongodb");
const { default: mongoose } = require('mongoose');
const templatePath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialPath);

app.get("/", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/signup", async (req, res) => {
    try {
        const phone = req.body.phone;
        const email = req.body.email;
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        const getphone = await Register.findOne({ phone: phone });
        const getemail = await Register.findOne({ email: email });
        if (!getphone && !getemail) {
            if (password === cpassword) {
                const data = {
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: email,
                    gender: req.body.gender,
                    phone: phone,
                    age: req.body.age,
                    password: password,
                    confirmpassword: cpassword
                };
                await Register.insertMany([data]);
                res.status(201).render("home");
            }
            else res.send("password are not matching");
        }
        else res.send("email or phone number is already exists");

    } catch (error) {
        res.status(404).send(error);
    }
});

app.post("/login", async (req, res) => {

    try {
        const check = await Register.findOne({ email: req.body.email });
        if (check.password == req.body.password) res.render("home");
        else res.send("wrong password");
    }
    catch {
        res.send("wrong details");
    }
});

app.listen(port, () => {
    console.log("port connected");
});