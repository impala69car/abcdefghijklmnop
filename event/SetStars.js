// ====================================================================================================
//
// Cloud Code for SetStars, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerLevelStars = Spark.getData().Level;
var playerStars = Spark.getData().Stars;
var playerData = {
    "playerLevelStars": playerLevelStars,
    "playerStars": playerStars
};
Spark.getPlayer().setPrivateData("playerData", playerData);
var player = Spark.getPlayer();
var API = Spark.getGameDataService();
var entry = API.createItem("starsdata", Spark.getPlayer().getPlayerId());
var data = entry.getData();
data.Level = Spark.getData().Level;
data.Stars = Spark.getData().Stars;
data.playerId = player.getPlayerId();
var status = entry.persistor().persist().error();
if(status){
    //return error if persistence interrupted
    Spark.setScriptError("ERROR", status)
}