// ====================================================================================================
//
// Cloud Code for getPlayerFriends, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Get inpuit data
var group = Spark.getData().group;
//Load Game Service API
var API = Spark.getGameDataService();
//Get player entry
var entry = API.getItem("playerFriends", Spark.getPlayer().getPlayerId());
//Forward declare player list object
var friendsList = {};

//Check for errors when returning player list entry
if(entry.error()){
    Spark.setScriptError("ERROR", error);
    Spark.exit();    
} else{
    //Data
    var data = entry.document().getData();

    //If input is not specific, return all friends
    if(group === "all"){
        for(var friendOBJ in data){
            //Set details of player ID and display name in new friendsList object
            friendsList[friendOBJ] = {};
            friendsList[friendOBJ].displayName = data[friendOBJ].displayName;
        }
    }
    else
    {
        //If group specific, return that group only
        //For every player in our friend list object
        for(var friendOBJ in data){
            if(data[friendOBJ].group === group && data[friendOBJ].status === "accepted"){
                //Set details of player ID and display name in new friendsList object
                friendsList[friendOBJ] = {};
                friendsList[friendOBJ].displayName = data[friendOBJ].displayName;
            }
        }
    }
//Return list to player
Spark.setScriptData("friendsList", friendsList);    
}