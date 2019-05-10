// ====================================================================================================
//
// Cloud Code for GetStars, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//var playerLevelGetStars = Spark.getData().Level;
//var playerGetStars = Spark.getData().Stars;
//var playerData = {
//    "playerLevelGetStars": playerLevelGetStars,
//    "playerGetStars": playerGetStars
//};//Dictionary<string,playerData>
//Spark.getPlayer().setPrivateData("playerData", playerData);
var playerData = Spark.getPlayer().getPrivateData("playerData"); //Get the playerData object
Spark.setScriptData("player_Data", playerData); 
var player = Spark.getPlayer();
var API = Spark.getGameDataService();
var entry = API.createItem("starsdata", Spark.getPlayer().getPlayerId());
var data = entry.getData();
data.Stars = Spark.getData().Stars;
data.playerId = player.getPlayerId();
var status = entry.persistor().persist().error();

if(status){
    Spark.setScriptError("ERROR", status);
}