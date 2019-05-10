// ====================================================================================================
//
// Cloud Code for ChangeNameEvent, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var trackName = Spark.getData().Name;
var time2 = Spark.getData().changecount;
var playerId = Spark.getPlayer().getPlayerId();
var time = new Date().toISOString();
var entryName = playerId;

var API = Spark.getGameDataService();
var entry = API.createItem("namedata", entryName);
var data = entry.getData();

data.trackName = trackName;
data.timeTaken = time;
data.timeEnd = time2;
data.playerId = playerId;
var status = entry.persistor().persist().error();

if(status){
    Spark.setScriptError("ERROR", status);
}