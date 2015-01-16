var Client = require('node-rest-client').Client;
//var ratingLogger = require('./local_modules/ratingHistory.js');
/*  https://www.npmjs.org/package/node-rest-client  */
client = new Client();


var hueConf = {
    username: "pascaldeveloper",
    apiURL: "http://192.168.200.103/api",
    workshopLampIDs: {
        blue: "2",
        red: "3"
    }
};


var satBlue = 0;
var satRed = 0;

var red = 65280;
var blue = 46920;

var getLamps = function (callback) {
    // registering remote methods
    // direct way
    var url = hueConf.apiURL + "/" + hueConf.username + "/lights";

    client.get(url, function (data) {
        // parsed response body as js object
        callback(data);
    });
};

var sendSpeedUpdateAndUpdateCurrentSatValues = function (newSatBlue, newSatRed) {
    var url = hueConf.apiURL + "/" + hueConf.username + "/lights/" + hueConf.workshopLampIDs.blue + "/state";
    var args = {data: JSON.stringify({sat: satBlue, hue: blue})};
    client.put(url, args, function (data) {});

    url = hueConf.apiURL + "/" + hueConf.username + "/lights/" + hueConf.workshopLampIDs.red + "/state";
    args = {data: JSON.stringify({sat: satRed, hue: red})};
    client.put(url, args, function (data) {});

    satBlue = newSatBlue;
    satRed = newSatRed;
};

//set lamps to red and blue and saturation 0
    var resetLamps = function () {


    var url = hueConf.apiURL + "/" + hueConf.username + "/lights/" + hueConf.workshopLampIDs.blue + "/state";
    var args = {data: JSON.stringify({on: true, hue: blue, sat: 0})};
    client.put(url, args, function (data) {});

    url = hueConf.apiURL + "/" + hueConf.username + "/lights/" + hueConf.workshopLampIDs.red + "/state";
    args = {data: JSON.stringify({on: true, hue: red, sat: 0})};
    client.put(url, args, function (data) {});


}
resetLamps();


var handleSpeedRequest = function (userRequests) {

    var span = 255;

    //we use the count to determine how many users we have in the workshop
    var count = 0;
    //the speedSum determines what color the lamp should display
    var speedSum = 0;
    for (var user in userRequests) {
        if (userRequests.hasOwnProperty(user)) {
            count++;
            speedSum += userRequests[user];
        }
    }
    //if half of the people vote one direction, the corresponding lamp should be 100% saturated in the color it displays (red / blue)
    var maxUsersThreshold = Math.floor(count/2)+1;

    //these are the values we intend to calculate
    var newSatBlue = 0;
    var newSatRed = 0;

    console.log("speedsum: " + speedSum + "user count: " + count);

    //if the overall mood is "slower" --> blue stays sat=0, red will be determined
    if(speedSum < 0){
        var percentage = Math.abs(speedSum)/maxUsersThreshold;
        newSatRed = Math.floor(percentage * span);

    }else if(speedSum > 0){
        var percentage = Math.abs(speedSum)/maxUsersThreshold;
        newSatBlue = Math.floor(percentage * span);

    }

    setColorsIfDiffSignificant(newSatBlue, newSatRed);
    //TODO setting the colors
};


var setColorsIfDiffSignificant = function(newSatBlue, newSatRed){
    var redDiff = Math.abs(satRed - newSatRed);
    var blueDiff = Math.abs(satBlue - newSatBlue);

    if ( redDiff > 10 || blueDiff > 10){
        sendSpeedUpdateAndUpdateCurrentSatValues(newSatBlue, newSatRed);
        console.log("red will sat: " + newSatRed + " blue will sat: " + newSatBlue);

    }
}

var printUserRatingDetails = function (userRequests, type) {
    var userCount = 0,
        neg = 0,
        nul = 0,
        plus = 0;
    var sum = 0;

    for (var user in userRequests) {
        if (userRequests.hasOwnProperty(user)) {
            userCount++;
            switch (userRequests[user][type]) {
                case 1:
                    plus++;
                    break;
                case 0:
                    nul++;
                    break;
                case -1:
                    neg++;
                    break;
            }
            sum += userRequests[user][type];
        }
    }
    console.log(userCount + " Users: (-1): " + neg + " (0): " + nul + " (1): " + plus + " Sum: " + sum);
}

module.exports = {
    getLamps: getLamps,
    handleSpeedRequest: handleSpeedRequest,
    resetLamps: resetLamps
};