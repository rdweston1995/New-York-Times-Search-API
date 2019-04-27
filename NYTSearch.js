//API Key  = io7envwhttJ2erWFG3welpGE0KIGMALc
$(document).ready(function(){
    $("#search").on("click", function(){

        var searchTerm = $("#searchTerm").val();
        console.log($("#searchTerm").val());
  
        var num = $("#num").val();

        if (num === "") {
            num = "10";
        }

        var startDate = $("#startDate").val();
        var endDate = $("#endDate").val();

        console.log(startDate);
        if (startDate === "" && endDate === "") {
            queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=io7envwhttJ2erWFG3welpGE0KIGMALc";
        } else if (endDate === "") {
            startDate += "0101";
            queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=io7envwhttJ2erWFG3welpGE0KIGMALc&&start_date=" + startDate;
        } else if (startDate === "") {
            endDate += "0101";
            queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=io7envwhttJ2erWFG3welpGE0KIGMALc&end_date=" + endDate;
    
        } else {
            startDate += "0101";
            endDate += "0101";
            queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=io7envwhttJ2erWFG3welpGE0KIGMALc&begin_date=" + startDate + "&end_date=" + endDate;
    
        }
        
        $.ajax({
            url: queryUrl,
            method: 'GET',
        }).then(function (data) {
            for (var i = 0; i < parseInt(num); i++) {
                $("#show").append($("<div>" + data.response.docs[i].headline.main + "</div>"));
                $("#show").append($("<div>" + data.response.docs[i].byline.original + "</div>"));
                $("#show").append($("<div>" + data.response.docs[i].snippet + "</div>"));
                $("#show").append($("<div>" + data.response.docs[i].pub_date + "</div>"));
            }
        });
    });
    
    
    
    //Clear button on click function
    $("#clear").on("click", function(){
        $("#show").empty();
    });
});
