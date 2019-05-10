// ====================================================================================================
//
// Cloud Code for GetCurrency, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var player = Spark.getPlayer();
var api = Spark.getGameDataService();
var entry = api.createItem("currencyData", Spark.getPlayer().getPlayerId());
var data = entry.getData();
Spark.getData().Value = data.Value;
var status = entry.persistor().persist().error();
var playerBoostsData = {
    "currencyData": data.Value
};
Spark.setScriptData("currencyData", Spark.getPlayer().getPrivateData("currencyData"));
if(status){
    Spark.setScriptError("ERROR", status);
}