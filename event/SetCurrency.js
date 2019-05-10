// ====================================================================================================
//
// Cloud Code for SetCurrency, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerSetCurrencyValue = Spark.getData().Value;
var playerCurrencyData = {
    "currencyData": playerSetCurrencyValue
};//Dictionary<string,playerData>
Spark.getPlayer().setPrivateData("currencyData", playerCurrencyData);
var player = Spark.getPlayer();
var API = Spark.getGameDataService();
var entry = API.createItem("currencyData", Spark.getPlayer().getPlayerId());
var data = entry.getData();
//data.Level = Spark.getData().scriptData.Level;
//data.Stars = Spark.getData().scriptData.Stars;
data.Value = Spark.getData().Value;
var status = entry.persistor().persist().error();

//Check if document saved
if(status){
    //return error if persistence interrupted
    Spark.setScriptError("ERROR", status)
}