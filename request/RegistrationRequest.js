// ====================================================================================================
//
// Cloud Code for RegistrationRequest, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
/*if(Spark.getData().scriptData.email == null){
    Spark.setScriptError("ERROR", "Email not specified");
} else{

    //Load API
    var API = Spark.getGameDataService();

    //Email
    var email = Spark.getData().scriptData.email;

    //Create condition
    var query = API.S("email").eq(email);

    //Check for results
    var resultOBJ = API.queryItems("playerProfile", query);

    //Check for errors
    if(resultOBJ.error()){
        Spark.setScriptError("ERROR", resultOBJ.error());

    } else{
        //Get result
        var result = resultOBJ.cursor();

        //If there's a result, means email is in use
        if(result.hasNext()){
            Spark.setScriptError("ERROR", "Email in use!")
        } else{
            Spark.setScriptData("email", Spark.getData().scriptData.email);
        }

    }
}*/