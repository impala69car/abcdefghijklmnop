// ====================================================================================================
//
// Cloud Code for Event, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Get code from input
var code = Spark.getData().code

//Load Data API
var API = Spark.getGameDataService();

//Create condition
var condition = API.S("code").eq(code);

//Attempt to get result
var resultOBJ = API.queryItems("challengeCodeCollection", condition);

//Check for errors
if(resultOBJ.error()){
    Spark.setScriptError("ERROR", "Could not retrieve data")
}else{
    //Get document
    var result = resultOBJ.cursor().next();
}

if(result){
    var challengeID = result.getId();

    //If game does not exist, return error
    if(challengeID == null){
        Spark.setScriptError("error", "NO GAME CAN BE FOUND");
    }
    //If game exists, join it and return response as scriptData
    else{
    //Create a join challenge request via code
    var joinRequest = new SparkRequests.JoinChallengeRequest();

    //Set the id of the challenge we wish to join
    joinRequest.challengeInstanceId = challengeID;

    //The sending happens here at .send()
    var joinResponse = joinRequest.Send()

    //If error is null or unidentified return the result of the request otherwise return the error
    if(joinResponse.error() == null){
        Spark.setScriptData("joined", joinResponse.joined);    
    } else{
        Spark.setScriptError("error", joinResponse.error)
    }
    }
}else{
    Spark.setScriptError("ERROR", "No game found");
}