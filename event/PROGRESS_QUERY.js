// ====================================================================================================
//
// Cloud Code for PROGRESS_QUERY, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Get the value that was passed in for PATH
var inputPath = Spark.data.PATH;

//Load API and get entry
var API = Spark.getGameDataService();

//Attempt to get entry
var entryObject = API.getItem("playerProgress", Spark.getPlayer().getPlayerId());

//If error attempting to retrieve entry
if(entryObject.error()){
    Spark.setScriptError("ERROR", entryObject.error())
    //Exit script
    Spark.exit();
} else{
    //Get entry
    var entry = entryObject.document();
    //Access Data
    var queryData = entry.getData();
}


if(inputPath.length > 0){
//No input path, we want the whole document
//If inputPath is valid, we return only the value of path
var pList = inputPath.split('.'); //Split the path, creating an array entry for every string split by '.'
var len = pList.length; //Get Length of list
for(var i = 0; i < len-1; i++) { //For every index except the last one, reach the location in the data object
    var elem = pList[i];
    //If element is undefined return an error message and terminate script
    if( !queryData[elem] ) {
        Spark.setScriptError("ERROR", "Path is not valid");
        Spark.exit();
    }

    //Continue following the string path and access the object's values
    queryData = queryData[elem];
}
queryData = queryData[pList[len-1]]; //Set the value of the final part of the path. This will update the object you passed in.
//If data is undefined return an error message and terminate script
if(queryData === undefined){
    Spark.setScriptError("ERROR", "Path is not valid");
    Spark.exit();
}
}

//Return data
Spark.setScriptData("data", queryData);