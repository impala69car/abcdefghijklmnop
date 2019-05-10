// ====================================================================================================
//
// Cloud Code for Placement, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Get input Score value
var inputScore = Spark.getData().score;
//Get player ID
var pID = Spark.getPlayer().getPlayerId();

//Add score to player's placement score
var scriptScore = Spark.getPlayer().getScriptData("placementScore");
 //Check if score is valid
 if (scriptScore !== null){
     var score = scriptScore + inputScore;
     Spark.getPlayer().setScriptData("placementScore", score);
 }
 //If not valid, create it
 else{
     var score = inputScore;
     Spark.getPlayer().setScriptData("placementScore", score);
 }

 //Check how many placement games the player has attempted
 var attempts = Spark.getPlayer().getScriptData("placementAttempts");
 //Check if valid
 if(attempts !== null){
     //If 5 games have been played, check score and place player in the correct league
     if(attempts >= 5){
         if(score >= 3 && score <= 4){
            Spark.getPlayer().setSegmentValue("league", "silver")
         } else if(score >= 5){
            Spark.getPlayer().setSegmentValue("league", "gold")
         } else{
             Spark.getPlayer().setSegmentValue("league", "bronze")
         }
         //Sort division
         require("mod_DivisionPlacement");
     }
     //If player hasn't played 5, increment attempts
     else{
      Spark.getPlayer().setScriptData("placementAttempts", attempts+1);   
     }
     }
//If not valid, create a reference     
else{
    Spark.getPlayer().setScriptData("placementAttempts", 1);
}
