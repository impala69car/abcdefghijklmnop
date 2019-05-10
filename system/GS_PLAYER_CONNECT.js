// ====================================================================================================
//
// Cloud Code for GS_PLAYER_CONNECT, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Get Game Data Service API
var API = Spark.getGameDataService();
var entry = API.getItem("playerFriends", Spark.getPlayer().getPlayerId());

//Ensure no error attemping to get friend's list table
if(entry.error()){
    Spark.setScriptError("ERROR", error);
    Spark.exit();    
} else{
    //Data
    var data = entry.document().getData();

    //For all players in the friend's list
    for(var friendId in data){
        var player = Spark.loadPlayer(friendId)
        //If they're online
        if(player.isOnline()){
            // send friend online message
            var newMessage = Spark.message("friendOnlineMessage");
            newMessage.setPlayerIds(friendId);
            newMessage.setMessageData({
            "senderId" : Spark.getPlayer().getPlayerId(),
            "displayName" : Spark.getPlayer().getDisplayName()
        });
        newMessage.send();
        }    
    }
}