var unsplashUrl = "https://api.unsplash.com/photos/?";
var unsplashKey = "client_id=c-IjSlno3hcniLXjGjNLHmA1cCJdEyXd2CuswiaMydo"

var ipstackUrl = "http://api.ipstack.com/134.201.250.155?";
var ipstackKey = "access_key=63132bface46b34e5f68472e399ebe92";

var npsUrl = "https://developer.nps.gov/api/v1/parks?parkCode=acad";
var npsKey = "&api_key=dAupn5zXkxUdXIomwX4fK9R6zhTDSV7j3bEW5IFp";




fetch(unsplashUrl + unsplashKey)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log('data', data)
    })

fetch(ipstackUrl + ipstackKey)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log('data', data)
    })

fetch(npsUrl + npsKey)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log('data', data)
    })