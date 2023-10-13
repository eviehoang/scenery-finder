var unsplashUrl = "https://api.unsplash.com/photos/random";
var unsplashKey = "?client_id=c-IjSlno3hcniLXjGjNLHmA1cCJdEyXd2CuswiaMydo"

var ipstackUrl = "http://api.ipstack.com/134.201.250.155";
var ipstackKey = "?access_key=63132bface46b34e5f68472e399ebe92";

var npsUrl = "https://developer.nps.gov/api/v1/parks?parkCode=acad";
var npsKey = "&api_key= dAupn5zXkxUdXIomwX4fK9R6zhTDSV7j3bEW5IFp";


const items = [
    {
        position: 0,
        el: document.getElementById('carousel-item-1')
    },
    {
        position: 1,
        el: document.getElementById('carousel-item-2')
    },
    {
        position: 2,
        el: document.getElementById('carousel-item-3')
    },
    {
        position: 3,
        el: document.getElementById('carousel-item-4')
    },
    {
        position: 4,
        el: document.getElementById('carousel-item-5')
    }
];


fetch(unsplashUrl + unsplashKey)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function (data) {
        console.log('data', data)
        for(var i=0; i <= 5; i++){
            items[i].el.children[0].setAttribute("src", data.urls.regular)
        }
        
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

