// ====================================================================================================
//
// Cloud Code for PhotoUrlEvent, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var trackName = Spark.getData().TRACK;
var trackURL = Spark.getData().PhotoUrl;
var timeTaken = Spark.getData().TourScore;
var playerId = Spark.getPlayer().getPlayerId();
var time = new Date().toISOString();
var entryName = playerId;

var API = Spark.getGameDataService();
var entry = API.createItem("urlphoto2", entryName);
var data = entry.getData();

data.trackURL = trackURL;
data.trackName = trackName;
data.timeTaken = timeTaken;
var status = entry.persistor().persist().error();

if(status){
    Spark.setScriptError("ERROR", status);
}