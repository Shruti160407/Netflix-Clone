//const express = require('express'); commonJS
import express from 'express';
const app = express(); 

app.get("/api/signup", (req, res) => {
    res.send("Signup route");
});
app.get("/api/login", (req, res) => {
    res.send("Login route");
});
app.get("/api/logout", (req, res) => {
    res.send("Logout route");
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
})