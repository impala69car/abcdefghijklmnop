// ====================================================================================================
//
// Cloud Code for Addlife, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var playerId = Spark.getPlayer().getPlayerId();
var friendPlayerId = Spark.getData().player_id;
var group = Spark.getData().group;
var message = Spark.getData().message;
//Get Game Service Data API
var api = Spark.getGameDataService();
//Get the other player's friend's list
var entry = api.getItem("currencyData", playerId);
if(entry.error()){
    Spark.setScriptError("ERROR", error);
    Spark.exit();
} 
else
{
    var data = entry.document().getData();
    var request = data[friendPlayerId];
    if(request){
        if(request.status === "declined"){
            Spark.setScriptError("ERROR", "player-declined");        
        } else{
           Spark.setScriptError("ERROR", "Request already made")      
        }
    }
    else
    {
        data[friendPlayerId] = {
            "Value": Spark.getData().Value
        }
    }
    var status = entry.document().persistor().persist().error();
        if(status){
            Spark.setScriptError("ERROR", status);
            Spark.exit();    
        } else{
            
    }
    
}