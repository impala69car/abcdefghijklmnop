// ====================================================================================================
//
// Cloud Code for declineFriendRequest, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Get Input
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

    //Assuming a request was made and the object exists, change the 'status' variale to 'declined'
    //If owner we want to set the status as You Declined so the decliner can send a request in the future
    //But the declined player wont be able to
    if(data[friendId]){
        if(owner){
            data[friendId].status = "You Declined";
        } else{
            data[friendId].status = "declined";    
        }


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
   }  else{
       if(owner){
            var newMessage = Spark.message("friendRequestDeclined");
            newMessage.setPlayerIds(friendId);
            newMessage.send();   
       }

   }
}    
}
