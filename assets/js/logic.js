$(document).ready(function(){

    $(".btn").on("click", function(event){
        console.log(this);
        console.log($(this));

    });

    $("#target").html("Target: ***");
    $("#total").html("Total: ***");
    $("#wins").html("Wins: ***");
    $("#losses").html("Losses: ***");

});