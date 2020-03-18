$("#searchbtn").on("click", function(event){
    event.preventDefault();
    characterajax();
    $(".characterdisplay").empty();
});

function characterajax() {
    event.preventDefault();
    const characterName = $("#searchedChar").val().trim();
    const queryURL = 'https://gateway.marvel.com/v1/public/characters?name=' + characterName + '&ts=1&apikey=66c7889f262bbc69f0281c76ea6a366d&hash=25b9e11e593510855d8a6ef9ef4d9fb9'
    $.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    if(response.data.results.length === 0){
        const undefinedCatch = $("<h3>Sorry, couldn't find " + '"' + characterName + '"' + "! Check your spelling, or search another character!</h3>");
        $(".characterdisplay").append(undefinedCatch); 
    } else{
        const cardBody = $("<div class='mb-3 w-auto h-auto p-3 rounded' style='background-color: #f7e75d; border-style: solid; border-color: black;''></div>");
        const cardBodyNew = $("<div class='row no-gutters'></div>");
        cardBody.append(cardBodyNew);
        const showingResultsFor = $("<h3 class='showingresultsfor'>Showing results for " + '"' + characterName + '"' + "</h3>");
        $(".characterdisplay").append(showingResultsFor);
        const picCol = $("<div class='col-md-4'></div>");
        cardBodyNew.append(picCol);
        const imageURL = response.data.results[0].thumbnail.path + '.' + response.data.results[0].thumbnail.extension;
        const image = $("<img class='image'>").attr("src", imageURL);
        picCol.append(image);
        const textCol = $("<div class='col-md-8'></div>");
        cardBodyNew.append(textCol);
        const textColDiv = $("<div class='card-body'></div>");
        textCol.append(textColDiv);
        const h1Text = $("<h1 class='name'></h1>");
        const pText = $("<p class='description'></p>");
        textColDiv.append(h1Text,pText);
        const name = response.data.results[0].name;
        h1Text.append(name);
        const description = response.data.results[0].description;
        pText.append(description);
        $(".characterdisplay").append(cardBody); 
    }    
})
}