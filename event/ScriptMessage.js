// ====================================================================================================
//
// Cloud Code for ScriptMessage, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var msg = Spark.message(null);
msg.setPlayerIds([Spark.getPlayer().getPlayerId()]);
msg.setMessageData({"title":"test title","body":"test body"});
msg.send();