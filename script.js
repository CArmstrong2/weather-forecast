const requestUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=4342961655399d4caf1a7dcdd7b14aee"

function API(){
    fetch(requestUrl)
        .then(function (response) {
    return response.json();
    })
    .then(function (data) {
        console.log(data)
    })
}