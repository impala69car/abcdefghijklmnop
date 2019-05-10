// ====================================================================================================
//
// Cloud Code for GetReachedLevel, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//var playerLevelReached = Spark.getData().Level;
//var playerData = {
//    "playerLevelReached": playerLevelReached
//};
//Spark.getPlayer().setPrivateData("playerData", playerData);
var playerData = Spark.getPlayer().getPrivateData("playerData"); //Get the playerData object
Spark.setScriptData("player_Data", playerData); 
var player = Spark.getPlayer();
var api = Spark.getGameDataService();
var entry = api.createItem("playerData", Spark.getPlayer().getPlayerId());
var data = entry.getData();
Spark.getData().Level = data.level;
var status = entry.persistor().persist().error();

if(status){
    Spark.setScriptError("ERROR", status);
}