// ====================================================================================================
//
// Cloud Code for LB, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var player = Spark.getPlayer();

//Get Game Service Data API
var API = Spark.getGameDataService();

//Attempt to retrieve entry
var entry = API.getItem("playersList", Spark.getPlayer().getPlayerId());

//Check for errors in returning document
if(entry.error()){
    Spark.setScriptError("ERROR", error);
    Spark.exit();
} else{
    //Get Data Object
    var data = entry.document().getData();

    //Check for input then update data object accordingly
    if(Spark.getData().userName != "null")
    {
        data.userName = Spark.getData().userName;
    }

    if(Spark.getData().displayName != "null")
    {
        data.displayName = Spark.getData().displayName;
    }

    if(Spark.getData().country != "null")
    {
        data.country = Spark.getData().country;
    }

    if(Spark.getData().city != "null")
    {
        data.city = Spark.getData().city;
    }

    if(Spark.getData().level != -1)
    {
        data.level = Spark.getData().level;
    }   
    //Attempt to persist document and retain any errors
    var status = entry.document().persistor().persist().error();
    //If there's an error in persisting
    if(status){
        Spark.setScriptError("ERROR", status);
        Spark.exit();
    }
}
