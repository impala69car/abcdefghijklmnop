// ====================================================================================================
//
// Cloud Code for EndGame, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Load variables
var league = Spark.getPlayer().getSegmentValue("league");
var score = Spark.getData().score;
var date = new Date;


//Check if player has been placed yet
if(league !== "placement"){

    if(Spark.getPlayer().getScriptData("division") === 0){
        require("mod_DivisionPlacement");
    }

    //If player is placed, send a score to be sorted in Leaderboard
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth();
    var request = new SparkRequests.LogEventRequest();

    request.eventKey = "event_InputScore";
    request.score = score;
    request.league = Spark.getPlayer().getSegmentValue("league");
    request.division = Spark.getPlayer().getScriptData("division");
    //Creating partition value with the format YYYY-MM for monthly periods
    request.date = year.toString() + "-" + ("0" + (month+1).toString()).slice(-2);

    request.Send();

} else{
    //If player hasn't been placed, update their placement details
    var request = new SparkRequests.LogEventRequest();

    request.eventKey = "event_Placement";
    request.score = score;

    request.Send();

}