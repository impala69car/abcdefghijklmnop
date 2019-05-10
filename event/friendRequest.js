var playerId = Spark.getPlayer().getPlayerId();
var friendPlayerId = Spark.getData().player_id;
var group = Spark.getData().group;
var message = Spark.getData().message;
var API = Spark.getGameDataService();
var entry = API.getItem("playerFriends", playerId);
var entry2 = API.getItem("players", playerId);
if(entry.error()){
    Spark.setScriptError("ERROR", error);
    Spark.exit();
} else{
    var data = entry2.document().getData();
    if(data.error()){
         Spark.setScriptError("ERROR", error);
        Spark.exit();
    }
    var request = data[friendPlayerId];
    if(request){
        if(request.status === "declined"){
            Spark.setScriptError("ERROR", "player-declined");        
        } else{
           Spark.setScriptError("ERROR", "Request already made")      
        }
    } else{
    data[friendPlayerId] = {
        "displayName" : Spark.loadPlayer(friendPlayerId).getDisplayName(),
        "group" : group,
        "status" : "pending"    
    }
    var status = entry.document().persistor().persist().error();
    if(status){
        Spark.setScriptError("ERROR", status);
        Spark.exit();    
    } else{
        //If no errors send a message to the other player with the request
        var newMessage = Spark.message("friendRequestMessage");
        newMessage.setPlayerIds(friendPlayerId);
        newMessage.setMessageData({
        "message" : message,
        "senderId" : playerId,
        "displayName" : Spark.getPlayer().getDisplayName()

        });
        newMessage.send();
        }    
        //Get friends table of requests
        var entry = API.getItem("playerFriends", friendPlayerId);
        if(entry.error()){
            Spark.setScriptError("ERROR", error);
            Spark.exit();    
        } else{
            //Get data object and insert new request for reference
            var friendData = entry.document().getData();
            //Create a reference to this player's friend request
            friendData[playerId] = {
            "displayName" : Spark.getPlayer().getDisplayName(),
            "group" : "none",
            "status" : "pending"
            }
            //Persist data and ensure it was saved
            var status = entry.document().persistor().persist().error();
            if(status){
              Spark.setScriptError("ERROR", status);
                Spark.exit();   
            }
        }
    }
    // and return a script message to show that the request was completed successfully //
    Spark.setScriptData("success", "request-sent")
}