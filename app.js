$(document).ready(function(){

$("#gifSpace").hide();
$("#gdad").hide();

$("#photo").on("click", function(){
    $("#gdad").show();
})

$("#gifs").on("click", function(){
    gifNum = 10;
    $("#gifSpace").show();
    $("#gifSpace").empty()
    var x = $(this).data("search");
    console.log(x)

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x +
    "&api_key=zG9cWB2fdhAqDcr9UfzJFW6DLBO8hMXP&limit=" + gifNum;

    $.ajax({url:queryURL,method:'GET'})
        .done(function(response){
            for (var i=0;i<response.data.length;i++){
            $("#gifSpace").append("<img src='"+response.data[i].images.downsized.url+"'>")
            }
        })
})

})
