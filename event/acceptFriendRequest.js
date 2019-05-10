// ====================================================================================================
//
// Cloud Code for acceptFriendRequest, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var friendId = Spark.getData().userId;

//Get Game Service Data API
var API = Spark.getGameDataService();

//Change player's entry
getEntryAndUpdate(Spark.getPlayer().getPlayerId(),friendId,true);
//Change friend's entry
getEntryAndUpdate(friendId,Spark.getPlayer().getPlayerId(),false);

function getEntryAndUpdate(ID, friendId,owner){
//Get the player's friend's list
var entry = API.getItem("playerFriends", ID);

//If error attempting to retrieve entry
if(entry.error()){
    Spark.setScriptError("ERROR", error);
    Spark.exit();
} else{
    //Get the data object of the entry
    var data = entry.document().getData();
    //Assuming a request was made and the object exists, change the 'status' variale to accepted
    var test = data[friendId];
    if(data[friendId] != null){
        data[friendId].status = "accepted";
    } else{
        Spark.setScriptError("ERROR", "No valid entry");
        Spark.exit();     
    }

    //Persist data
   var status = entry.document().persistor().persist().error();

   //If error attempting to persist
   if(status){
        Spark.setScriptError("ERROR", status);
        Spark.exit();    
   } else{
       if(owner){
            var newMessage = Spark.message("friendAcceptedMessage");
            newMessage.setPlayerIds(friendId);
            newMessage.send();   
       }

   }
}    
}
