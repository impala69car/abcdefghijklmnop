// ====================================================================================================
//
// Cloud Code for boosterSave, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var ghostData = Spark.getData().GHOST_DATA;
var trackName = Spark.getData().TRACK;
var timeTaken = Spark.getData().TIME;
//var Idcurrent1 = Spark.getData().Idcurrent;
//Get playerId and timestamp to create entry name
var playerId = Spark.getPlayer().getPlayerId();
var time = new Date().toISOString();
var entryName = playerId+":"+Spark.getData().Idcurrent;

//Create entry and get its data object
var API = Spark.getGameDataService();
var entry = API.createItem("checkbooster", entryName);
var data = entry.getData();
//Add new data to entry
data.ghostData = ghostData;
data.trackName = trackName;
data.timeTaken = timeTaken;
data.playerId = playerId;
//Persist and return any errors
var status = entry.persistor().persist().error();
    
if(status){
    Spark.setScriptError("ERROR", status);
}

