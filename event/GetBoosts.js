// ====================================================================================================
//
// Cloud Code for GetBoosts, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

//var playerData = Spark.getPlayer().getPrivateData("playerData"); 
//Spark.setScriptData("player_Data", playerData); 
var player = Spark.getPlayer();
var api = Spark.getGameDataService();
var entry = api.createItem("boostsData", Spark.getPlayer().getPlayerId());
var data = entry.getData();
Spark.getData().Boosts = data.Boosts;
var playerBoostsData = {
    "boostsData": data.Boosts
};
Spark.setScriptData("boostsData", Spark.getPlayer().getPrivateData("boostsData"));
var status = entry.persistor().persist().error();
if(status){
    Spark.setScriptError("ERROR", status);
}