var unsplashUrl = "https://api.unsplash.com/photos/random";

var unsplashKey = "?client_id=c-IjSlno3hcniLXjGjNLHmA1cCJdEyXd2CuswiaMydo"

// var ipstackUrl = "http://api.ipstack.com/134.201.250.155";
// var ipstackKey = "?access_key=63132bface46b34e5f68472e399ebe92";

var npsUrl = "https://developer.nps.gov/api/v1/parks?parkCode=acad";
var npsKey = "&api_key=dAupn5zXkxUdXIomwX4fK9R6zhTDSV7j3bEW5IFp";

var userInput = document.getElementById('default-search');
// var searchBtn = document.querySelector('#searchBtn');
var forwardBtn = document.getElementById('forward-button');
var backBtn = document.getElementById('back-button');
var unsplash = [];
var index = 0;


var items = [
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


async function carousel() {
    var res1 = await fetch(unsplashUrl + unsplashKey);
    var data1 = await res1.json();
    items[0].el.children[0].setAttribute("src", data1.urls.regular);

    var res2 = await fetch(unsplashUrl + unsplashKey);
    var data2 = await res2.json();
    items[1].el.children[0].setAttribute("src", data2.urls.regular);

    var res3 = await fetch(unsplashUrl + unsplashKey);
    var data3 = await res3.json();
    items[2].el.children[0].setAttribute("src", data3.urls.regular);

    var res4 = await fetch(unsplashUrl + unsplashKey);
    var data4 = await res4.json();
    items[3].el.children[0].setAttribute("src", data4.urls.regular);

    var res5 = await fetch(unsplashUrl + unsplashKey);
    var data5 = await res5.json();
    items[4].el.children[0].setAttribute("src", data5.urls.regular);
}

carousel();

// Save last search history
// check for localstorage
document.getElementById("submitBtn").addEventListener('click', function (event) {
    event.preventDefault();
    // get search word
    var name = userInput.value;

    // Local Storage
    localStorage.setItem('history', name);
    localStorage.getItem('history');
})
