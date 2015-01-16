//dependencies
var express = require('express');
var hueControl = require('./local_modules/hueControl.js');
var ratingLogger = require('./local_modules/ratingHistory.js');
var loggingStatistics = require('./local_modules/loggingStatistics.js');


/* ########     app creationand configuration      ########*/
var app = express();
//to be able to extract the javascript object from the body of a request
app.use(express.bodyParser());

//to not exit everything if an error is thrown
process.on('uncaughtException', function (err) {
    console.log('Caught exception: ' + err);
});


//host our workshop application as well as its static content
app.use('/', express.static(__dirname + '/'));
app.use('/static/app/bower_components/', express.static(__dirname + '/static/bower_components'));


var userSpeedRequests = {};


// ==================================================================
//every user in the workshop calls this once he calls the website
app.post('/api/user/:username', function (req, res) {
    var username = req.params.username;


    //if user does not yet exist add him
    if (!userSpeedRequests[username]) {
        console.log("user " + username + " joined the workshop");
        userSpeedRequests[username] = 0
    }
    res.send(userSpeedRequests[username]);
});





// ==================================================================
// our API for controlling the lights. we take the user requests here

app.put('/api/user/:username/speed/:speed', function (req, res) {
    var username = req.params.username;
    var speed = parseInt(req.params.speed);

    if (speed == 1 || speed == 0 || speed == -1) {


        userSpeedRequests[username] = speed;
        res.send(userSpeedRequests[username]);

        hueControl.handleSpeedRequest(userSpeedRequests);

        //ratingLogger.logRating(userSpeedRequests, username, "speed", speed, {hue: hue, sat: sat});
    } else {
        res.send("Error, wrong values submitted");
    }

});


// ==================================================================
// retrieve logging data here
app.get('/api/logs', function (req, res) {
    loggingStatistics.getAllLogFiles(function(files){
        res.send(files);
    })
});

app.get('/api/logs/:logFileName', function (req, res) {

    loggingStatistics.getLogFile(req.params.logFileName, function(loggingContent){
        res.send(loggingContent);
    })
});


// start the server and listen to the port supplied
var server = app.listen(8080, function () {
    console.log('Listening on port %d', server.address().port);
});




