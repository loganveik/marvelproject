$("#searchbtn").on("click", function(event){
    event.preventDefault();
    characterajax();
    // $(".characterdisplay").empty();
});

$("#homebtn").on("click", function(event){
    
});

function characterajax() {
    event.preventDefault();
    const characterName = $("#searchedChar").val().trim();
    const queryURL = 'http://gateway.marvel.com/v1/public/characters?nameStartsWith=' + characterName + '&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9'
    $.ajax({
    url: queryURL,
    method: "GET",
    count: "1493"
}).then(function(response){
    const imageURL = response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension;
    const image = $("<img class='image'>").attr("src", imageURL);
    $(".imagediv").append(image);
    const name = response.data.results[0].name;
    $(".name").append(name);
    const description = response.data.results[0].description;
    $(".description").append(description);
})
}