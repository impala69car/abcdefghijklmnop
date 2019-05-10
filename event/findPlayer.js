//Get Game Service Data API
var API = Spark.getGameDataService();
//Forward declare condition
var condition;
//Forward declare player list which we will populate with entries based on our query
var playerList = [];

//Check for input and change query based on input
if(Spark.getData().userName != "null")
{
    var userNameCondition = API.S("userName").eq(Spark.getData().userName);
    condition = addCondition(condition, userNameCondition);
}

if(Spark.getData().displayName != "null")
{
    var displayNameCondition = API.S("displayName").eq(Spark.getData().displayName);
    condition = addCondition(condition, displayNameCondition);
}

if(Spark.getData().country != "null")
{
    var countryCondition = API.S("country").eq(Spark.getData().country);
    condition = addCondition(condition, countryCondition);
}

if(Spark.getData().city != "null")
{
    var cityCondition = API.S("city").eq(Spark.getData().city);
    condition = addCondition(condition, cityCondition);
}

if(Spark.getData().level != -1)
{
    var levelCondition = API.N("level").eq(Spark.getData().level)
    condition = addCondition(condition, levelCondition);
}   

//Exclude this player
condition.and(API.S("userName").ne(Spark.getPlayer().getUserName()));

//Run query
var entryList = API.queryItems("playersList", condition);

//If query has errors
if(entryList.error()){
     Spark.setScriptError("ERROR", entryList.error());
     Spark.exit();    
} else{
    //If no erros and entries
    var temp;
    var OBJ;
    //Loop through entries
    while (entryList.cursor().hasNext()){
        //Get reference of entry
        temp = entryList.cursor().next();
        //Populate data and ID of entry
        OBJ = temp.getData();
        OBJ.Id = temp.getId()
        //Add to list of players array
        playersList.push(OBJ);     
    }
    //Return list
    Spark.setScriptData("playersList", playerList)
}

//Function to dynamically create a compound query
function addCondition(condition, otherCondition) {
    if (condition) {
        return condition.and(otherCondition);
    }
    return otherCondition;
}