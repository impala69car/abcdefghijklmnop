// ====================================================================================================
//
// Cloud Code for GettBoosts, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerData = Spark.getPlayer().getPrivateData("playerData"); //Get the playerData object
Spark.setScriptData("player_Data", playerData); 