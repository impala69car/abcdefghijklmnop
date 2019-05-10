// ====================================================================================================
//
// Cloud Code for TournamentNews, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var ghostData = Spark.getData().Division;
var trackName = Spark.getData().NameTurnir;
var timeTaken = Spark.getData().league;
var playerId = Spark.getPlayer().getPlayerId();
var time = new Date().toISOString();
var entryName = playerId;

var API = Spark.getGameDataService();
var entry = API.createItem("NewsData", entryName);
var data = entry.getData();


data.ghostData = ghostData;
data.trackName = trackName;
data.timeTaken = timeTaken;
data.timeTaken2 = time;
data.playerId = playerId;
var status = entry.persistor().persist().error();

if(status){
	Spark.setScriptError("ERROR", status);
}