# Scenery-Finder
![](assets/image/web-sshot.png)
Scenery Finder is a user-friendly application that seamlessly combines two APIs and three libraries to help users quickly discover parks and activities in their chosen cities. This app fills a gap in the market by merging a comprehensive directory of local scenic spots and popular attractions, and activities, all in one place. Unlike existing options, which often require users to navigate multiple websites and apps, Scenery Finder simplifies the process by sourcing data from APIs and consolidating them in one attractive format. This ensures accessibility for users with varying levels of digital literacy.

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| Javascript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript/]|(https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
| Tailwind CSS | [https://tailwindcss.com/] | (https://tailwindcss.com/)
| Flowbite CSS | [https://flowbite.com/docs/] | (https://flowbite.com/docs/)
| Google Font API | [https://developers.google.com/fonts/docs/getting_started] | (https://developers.google.com/fonts/docs/getting_started)
| National Park API | [https://www.nps.gov/subjects/developer/api-documentation.htm] | (https://www.nps.gov/subjects/developer/api-documentation.htm)
| Unsplash API | [https://unsplash.com/documentation] | (https://unsplash.com/documentation)

## Description

Making a Scenery-Finder app for aesthetic location near user. 

Deployed Site [https://eviehoang.github.io/scenery-finder/](https://eviehoang.github.io/scenery-finder/)

## Sample Code
Chain Promising for information push to a carousel:
```js
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
```

Function to add cards to the HTML via Javascript:
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

* [Tailwind](https://tailwindcss.com/docs/installation) and [Flowbite](https://flowbite.com/docs/) for CSS presets
* [Vengage](https://venngage.com/blog/accessible-colors/) for providing inspiration for websafe accesibile colors.
* [Unsplash](https://unsplash.com) for providing images and API
* [W3School](w3schools.com/howto/tryit.asp?filename=tryhow_css_social_media_buttons) for example codes and educational references.
* [National Park Servicies](https://www.nps.gov/subjects/developer/api-documentation.htm#/) for providing images,data, and API


## License

N/A