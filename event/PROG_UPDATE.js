// ====================================================================================================
//
// Cloud Code for PROG_UPDATE, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Get the value that was passed in for PATH
var inputPath = Spark.data.PATH;
//Get the value that was passed in for VAL
var inputValue = Spark.data.VAL;      

//Function to set value at end of path
function set(obj, path, value) {
    var schema = obj;  // a moving reference to internal objects within obj
    var pList = path.split('.'); //Split the path, creating an array entry for every string split by '.'
    var len = pList.length; //Get Length of list
    for(var i = 0; i < len-1; i++) { //For every index except the last one, reach the location in the data object
        var elem = pList[i];
        if( !schema[elem] ) schema[elem] = {}
        schema = schema[elem];
    }

    schema[pList[len-1]] = value; //Set the value of the final part of the path. This will update the object you passed in.
}

//Create entry and get its data object
var API = Spark.getGameDataService();
var playerId = Spark.getPlayer().getPlayerId();
//Get entry, data is best accessed via ID
var entryOBJ = API.getItem("playerProgress", playerId);
var data = {};
if(entryOBJ.error()){

} else{
    //If document exists
    if(entryOBJ.document()){  
        entry = entryOBJ.document();
    }
    else{
        entry = API.createItem("playerProgress", playerId);
    }
}

//Get the data object where custom data is stored
var data = entry.getData();

//Set value of variable at path
set(data, inputPath, inputValue);

//Persist and return any errors
var status = entry.persistor().persist().error();

//If there are errors the entry would not persist and we can act on that information
if(status){
    //Output error script
    Spark.setScriptError("ERROR", status);
    //Stop execution of script
    Spark.exit();
}
