const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// other stuff
const app =  express();
const path = require('path');
const PORT = process.env.PORT || 3600;


// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.resolve(__dirname, 'build')));
app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})


// To listen the port
app.listen(PORT, function(){
    console.log("listening at port:"+ PORT);
});
