// ====================================================================================================
//
// Cloud Code for TourTime, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var trackName = Spark.getData().TRACK;
//var timeTaken = Spark.getData().TIME;
var timeQuit = Spark.getData().TIME;
if(Spark.getPlayer().getPlayerId()=="5be8b796fc37de04ee99c3ca"){
    var API = Spark.getGameDataService();
    var playerId = Spark.getPlayer().getPlayerId();
    
    var query = API.S("trackName").eq(trackName);
    
    var sort = API.sort("timeTaken", true);
    
    var resultsOBJ = API.queryItems("tourdata", query,sort);
    
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
}
else{
    var API = Spark.getGameDataService();
    var playerId = Spark.getPlayer().getPlayerId();
    
    var query = API.S("playerId").eq(playerId);
    var sort = API.sort("timeTaken", true);
    
    var resultsOBJ = API.queryItems("tourdata", query,sort);
    
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
    
}