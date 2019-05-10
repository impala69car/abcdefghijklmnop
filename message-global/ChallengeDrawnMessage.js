// ====================================================================================================
//
// Cloud Code for ChallengeDrawnMessage, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Get challenge instance id
var challengeID = Spark.getData().challenge.challengeId;

//Load API
var API = Spark.getGameDataService();

//Attempt to find entry
var resultOBJ = API.getItem("challengeCodeDataType", challengeID);

//If error
if(resultOBJ.error()){
    Spark.setScriptError("ERROR", resultOBJ.error());
} else{
    //If entry is retrieved
    if(resultOBJ.document()){
        //Delete entry
        resultOBJ.document().delete();
    }
}
