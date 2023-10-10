var queryUrl = "https://api.unsplash.com/photos/?client_id=c-IjSlno3hcniLXjGjNLHmA1cCJdEyXd2CuswiaMydo";

fetch(queryUrl)
    .then(function(response){
        console.log(response)
        return response.json();
    })
    .then(function(data){
        console.log('data', data)
    })


    // "http://api.ipstack.com/134.201.250.155?access_key=63132bface46b34e5f68472e399ebe92";

    // "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=dAupn5zXkxUdXIomwX4fK9R6zhTDSV7j3bEW5IFp"

    // 