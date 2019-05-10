// ====================================================================================================
//
// Cloud Code for SetReachedLevel, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerLevelReached = Spark.getData().Level;
var playerData = {
    "playerLevelReached": playerLevelReached
};
Spark.getPlayer().setPrivateData("playerData", playerData);
var player = Spark.getPlayer();
var api = Spark.getGameDataService();
var entry = api.createItem("playerData", Spark.getPlayer().getPlayerId());
var data = entry.getData();
data.level = Spark.getData().Level;
var status = entry.persistor().persist().error();
//Check if document saved
if(status){
    //return error if persistence interrupted
    Spark.setScriptError("ERROR", status)
}