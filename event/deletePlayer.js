// ====================================================================================================
//
// Cloud Code for deletePlayer, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var userName = Spark.loadPlayer(Spark.getPlayer().getPlayerId()).deletePlayer();