const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.listen(3000, function () {
    console.log('App is running...');
});

app.get('/', function (req, res) {
    console.log('/');
    var setting = (process.env.SOME_SETTING) ? process.env.SOME_SETTING : "default";
    res.status(200).send({
        setting
    });
});

app.get('/create', function (req, res) {
    console.log('/create');
    fs.writeFile(path.join(process.env.DIRECTORY ? process.env.DIRECTORY : '', "file.txt"), 'Something', function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
    res.status(200).send({});
});