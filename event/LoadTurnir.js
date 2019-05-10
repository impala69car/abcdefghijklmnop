// ====================================================================================================
//
// Cloud Code for LoadTurnir, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var ghostData = Spark.getData().GHOST_DATA;
var trackName = Spark.getData().NameTurnir;
var timeTaken = Spark.getData().EnterTime;
if(Spark.getData().EnterQuit=="1"){
var playerId = Spark.getPlayer().getPlayerId();
var time = new Date().toISOString();
var entryName = playerId;

var API = Spark.getGameDataService();
var entry = API.createItem("tourdata", entryName);
var data = entry.getData();


data.ghostData = ghostData;
data.trackName = trackName;
data.timeTaken = time + "0000-00-4T00:00:00.000Z";
data.timeEnd = time + "0000-00-8T00:00:00.000Z";
data.playerId = playerId;
data.Name = Spark.getData().Name;
var status = entry.persistor().persist().error();

if(status){
    Spark.setScriptError("ERROR", status);
}
}
