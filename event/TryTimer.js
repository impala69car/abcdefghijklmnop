// ====================================================================================================
//
// Cloud Code for TryTimer, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================

var time = new Date().toISOString();
var playerId = Spark.getPlayer().getPlayerId();
Spark.setScriptData(playerId,time);