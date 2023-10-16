var unsplashUrl = "https://api.unsplash.com/photos/random/?orientation=landscape&topics=plants,nature";
var unsplashKey = "&client_id=Y7VECVD09iDrQAy00Es7pzryAq1eJHAavoD0b01THRU"

// Anthony's API key: Y7VECVD09iDrQAy00Es7pzryAq1eJHAavoD0b01THRU
// Nhi's API key: 1iOtLjJ9hG3zf-39daEIaUwg9f-A-Y4g7G_hKmOBX4

var npsUrl = "https://developer.nps.gov/api/v1/parks?";
var npsKey = "?&api_key=dAupn5zXkxUdXIomwX4fK9R6zhTDSV7j3bEW5IFp";

var userInput = document.getElementById('default-search');


// object array for the carousel
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

// Chain promising to request multiple images from national park api to set into the carousel
async function carousel() {
    for(var i=0; i < items.length; i++){
        var res1 = await fetch(unsplashUrl + unsplashKey);
        var data1 = await res1.json();

        // Traversing the DOM to set attributes
        items[i].el.children[0].setAttribute("src", data1.urls.regular);
        items[0].el.children[0].setAttribute("alt", data1.description);
    }
}

carousel();

// Fetching random parks with their associated name, picture, description, and additional info link
function randomParks(){
    var rand;
    var indexNum = [];
    for(var i=0; i < 3; i++){
        rand = Math.floor(Math.random() * 49);
        indexNum.push(rand);
    }

    fetch(npsUrl + npsKey)
        .then(function (response){
            return response.json();
        })
        .then(function(data){
            console.log('data', data);
            for(var i=0; i < 3; i++){
                var cardId = document.getElementById("park-" + (i+1).toString());
                cardId.children[0].children[1].children[0].textContent = data.data[indexNum[i]].name;
                cardId.children[0].children[1].children[1].textContent = data.data[indexNum[i]].description;
                cardId.children[0].children[1].children[2].setAttribute('href', data.data[indexNum[i]].url)
                cardId.children[0].children[0].setAttribute('src', data.data[indexNum[i]].images[0].url)
            }
        })

}

randomParks();

// Parks by location
function localParks(){
    var location = userInput.value;
    var searchQuery = npsUrl + "&q=" + location + npsKey;

    fetch(searchQuery)
        .then(function (response){
            return response.json();
        })
        .then(function(data){
            console.log('data', data);
            for(var i=0; i <= 5; i++){
            var searchYield = document.getElementById("searchYield");

            // var des = data.data[i].description;
            var name = data.data[i].name;
            var img = data.data[i].images[2].url;
            var alt = data.data[i].images[2].altText[2];
            var placeUrl = data.data[i].url;

            var cardHTML = `<div class="p-5 mx-10">
            <a href="`+placeUrl+`" class="text-center"> <img class="aspect-square rounded-lg max-w-sm m-auto hover:shadow-xl" src="`+img+`" alt="`+alt+`">
           <h4 class="text-xl m-5">`+name+`</h4>
           </a>
            </div>`
        
            var card = cardHTML;
            searchYield.innerHTML += card;

            }
        })
        .catch(function (error) {
            console.error('Error:', error);
        });
}


// Save last search history
// check for localstorage
// empty string
var searchHistory = [];

document.getElementById("submitBtn").addEventListener('click', function (event) {
    event.preventDefault();

    // Clear existing content before adding new cards
    searchYield.innerHTML = ""; 

    // Add Destination
    localParks();
    location.href="#destination";
    document.getElementById("destination").style.display = "block";

    
    // get search word
    var name = userInput.value;

    // formatting the name to cut any end spaces
    name = name.trim();

    // Setting local storage with initial key-value pair and adding more values to the key 'history'
    searchHistory.push(name);   
    localStorage.setItem('history', JSON.stringify(searchHistory));

})

