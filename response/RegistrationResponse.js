// ====================================================================================================
//
// Cloud Code for RegistrationResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
/*if(!Spark.hasScriptErrors()){
//Load API
var API = Spark.getGameDataService();

//Create player inventory
var doc = API.createItem("playerProfile", Spark.getPlayer().getPlayerId());
//Get Data
var data = doc.getData();

//Save userName and password
data.userName = Spark.getPlayer().getUserName();
data.displayName = Spark.getPlayer().getDisplayName();
data.email = Spark.getData().scriptData.email;

//Persist document
var status = doc.persistor().persist().error();

//Check if document saved
if(status){
    //return error if persistence interrupted
    Spark.setScriptError("ERROR", status)
}
}
if(Spark.getData().error === undefined)
{
  //Load player
  var player = Spark.getPlayer();

  //Get Game Service Data API
  var API2 = Spark.getGameDataService();

  //Create new entry
  var entry = API2.createItem("playerList", player.getPlayerId());

  //If valid, increment or initialise item
  var data = entry.getData();

  //set data
  data.userName = player.getUserName();
  data.displayName = player.getDisplayName();

  //Persist doc
  var status = entry.persistor().persist().error();

  //Check if Doc has been persisted without error
  if(status){
      Spark.setScriptError("ERROR", status);
      Spark.exit();
  } else{
      //Create playerFriends entry for player
      entry = API2.createItem("playerFriends", Spark.getPlayer().getPlayerId());

      //Persist
      status = entry.persistor().persist().error();

      //If error, stop execution
      if(status){
        Spark.setScriptError("ERROR", status);
        Spark.exit();    
      }
  }
}
*/