# Scenery-Finder

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript/]|(https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
| Tailwind CSS | [https://tailwindcss.com/] | (https://tailwindcss.com/)
| Flowbite CSS | [https://flowbite.com/docs/] | (https://flowbite.com/docs/)
| Google Font | [https://developers.google.com/fonts/docs/getting_started] | (https://developers.google.com/fonts/docs/getting_started)

## Description

Making a Scenery-Finder app for aesthetic location near user. 

Deployed Site [https://eviehoang.github.io/scenery-finder/](https://eviehoang.github.io/scenery-finder/)

## Sample Code

```js
// Chain promising 
async function carousel() {
    var res1 = await fetch(unsplashUrl + unsplashKey);
    var data1 = await res1.json();
    items[0].el.children[0].setAttribute("src", data1.urls.regular);
    items[0].el.children[0].setAttribute("alt", data1.description);
    
}
```


```js
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
```

## Author Info

#### Anthony Nguyen
```md
* [Github](https://github.com/Blackswan1010)
```
#### Nhi Hoang
```md
* [Github](https://github.com/eviehoang)
```
#### Tayla Rios
```md
* [Github](https://github.com/taylasagerios)
```

## Credits

N/A

## License

N/A