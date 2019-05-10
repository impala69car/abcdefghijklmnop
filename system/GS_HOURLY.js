// ====================================================================================================
//
// Cloud Code for GS_HOURLY, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Load Data Service
var API = Spark.getGameDataService();

//Create condition
var query = API.S("item").eq("plant");

//Use condition for query
var resultsOBJ = API.queryItems("field", query);

//Are there errors
if(resultsOBJ.error()){
    Spark.setScriptError("ERROR", resultsOBJ.error());
}else{

    //Get results
    var results = resultsOBJ.cursor();

    //Loop through cursor and remove entries
    while(results.hasNext()){
        results.next().delete();
    }
}