var unsplashUrl = "https://api.unsplash.com/photos/random";
var unsplashKey = "?client_id="

// Anthony's API key: Y7VECVD09iDrQAy00Es7pzryAq1eJHAavoD0b01THRU
// Nhi's API key: c-IjSlno3hcniLXjGjNLHmA1cCJdEyXd2CuswiaMydo

var npsUrl = "https://developer.nps.gov/api/v1/parks?parkCode=acad";
var npsKey = "&api_key=dAupn5zXkxUdXIomwX4fK9R6zhTDSV7j3bEW5IFp";

var userInput = document.getElementById('default-search');
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

// empty string
var searchHistory = {};



document.getElementById("submitBtn").addEventListener('click', function (event) {
    event.preventDefault();
    
    // get search word
    var name = userInput.value;

    getHistory = localStorage.getItem('history')?JSON.parse(localStorage.getItem('history')) : [];

    getHistory.push(searchHistory);
    localStorage.setItem('history', JSON.stringify(name));


})


// if(localStorage.getItem('history')){
//     searchHistory = JSON.parse( localStorage.getItem('history'));

// }

// addHistory(name);
// console.log(searchHistory);

// function addHistory(dataSaved){
//     searchHistory.push(dataSaved);
//     localStorage.setItem('searched', JSON.stringify(searchHistory));
// }

    // // Local Storage
    // localStorage.setItem('history', name);
    // localStorage.getItem('history');
