// ====================================================================================================
//
// Cloud Code for PLANT_SEED, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var x = Spark.getData().x;
var y = Spark.getData().y;

//Get playerId and timestamp to create entry name
var playerId = Spark.getPlayer().getPlayerId();
var time = new Date().toISOString();
var entryName = playerId + time;


//Create entry and get its data object
var API = Spark.getGameDataService();
var entry = API.createItem("field", entryName);
var data = entry.getData();

//Add new data to entry
data.x = x;
data.y = y;
data.item = "plant"
data.playerId = playerId;

//Persist entry
var status = entry.persistor().persist().error();

if(status){
    Spark.setScriptError("Error", status);
}