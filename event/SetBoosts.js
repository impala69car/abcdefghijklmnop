// ====================================================================================================
//
// Cloud Code for GetBoosts, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerBoostsValue = Spark.getData().Boosts;
var playerBoostsData = {
    "boostsData": playerBoostsValue
};
Spark.getPlayer().setPrivateData("boostsData", playerBoostsData);
Spark.setScriptData("boostsData", Spark.getPlayer().getPrivateData("boostsData"));
var player = Spark.getPlayer();
var API = Spark.getGameDataService();
var entry = API.createItem("boostsData", Spark.getPlayer().getPlayerId());
var data = entry.getData();
data.Boosts = Spark.getData().Boosts;
var status = entry.persistor().persist().error();
if(status){
    Spark.setScriptError("ERROR", status)
}