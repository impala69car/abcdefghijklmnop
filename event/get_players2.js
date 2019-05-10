// ====================================================================================================
//
// Cloud Code for get_players2, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var trackName = Spark.getData().TRACK;

//Create entry and get its data object
var API = Spark.getGameDataService();
var playerId = Spark.getPlayer().getPlayerId();
//Construct condition and sort
var query = API.S("playerId").eq(trackName);
// Ensure the field used to sort the query results has been indexed
var sort = API.sort("timeTaken", true);

//Use condition and sort to return results
var resultsOBJ = API.queryItems("urlpicture", query,sort);

if(resultsOBJ.error()){
    Spark.setScriptError("ERROR", resultsOBJ.error())
}else{
    var results = resultsOBJ.cursor();
    if(results.hasNext()){
        while(results.hasNext()){
          var result = results.next();
          Spark.setScriptData(result.getId(),result.getData());
        }
    } else{
        Spark.setScriptError("ERROR", "No results found");
    }
}