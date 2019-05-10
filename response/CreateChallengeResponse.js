// ====================================================================================================
//
// Cloud Code for CreateChallengeResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
if(Spark.getData().challengeInstanceId !== null){

    //Load data service
    var API = Spark.getGameDataService();

    //Get the challenge instance id generated
    var challengeID = Spark.getData().challengeInstanceId;


    //Generate random code of 000-000 format
    var code = randomCode();

    //If we did not get a valid code after 1000 attempts then force an error
    if(code === null){
        Spark.setScriptError("error", "NO VALID CODE CAN BE GENERATED")
    } else{
        //Create time stamp
        var date = new Date();

        //Create new entry in Data Type for players to search and join
        var entry = API.createItem("challengeCodeDataType", challengeID);
        var data = entry.getData();
        data.code = code;
        data.creationTime = date.getTime();

        //Persist entry
        var status = entry.persistor().persist().error();

        if(status){
            //Return the code to the player
            Spark.setScriptData("code", code);    
        } else{
            Spark.setScriptError("ERROR", status)
        }

    }

}

//Function to create number
function randomCode(){
    //Create a code, if this code is not valid (used already) keep trying for 1000 times, if none are valid, return null to be used to create an error message back
    for(var i = 0; i < 1000; i++){
        //Generate two 3 character long ints
        var firstThree = ("00" + Math.floor(Math.random() * 1000).toString()).slice(-3);
        var secondThree = ("00" + Math.floor(Math.random() * 1000).toString()).slice(-3);

        //Combine ints to form game search code
        var codeGen = firstThree + "-" + secondThree;

        //Create a condition comparing the code
        var condition = API.S("code").eq(codeGen);

        //Is there any other game using this code right now?
        var potentialMatch = API.queryItems("challengeCodeDataType", condition);

        //Was there an error trying to connect to data service
        if(potentialMatch.error() == null){
            //If not, break while loop by returning code
            if(potentialMatch.cursor().next() === null){
                return codeGen;
            }
            if(i >= 999){
                return null;
            }
        } else{
            Spark.setScriptError("ERROR", "Error retrieving data");
            return null;
        }

    }
}