// ====================================================================================================
//
// Cloud Code for AuthenticationRequest, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
/*
var status = "Started";
//Checking if there is any scriptData passed in, if not then carry on the authentication as normal
if(Spark.data.scriptData != null){

    var action = Spark.data.scriptData.action;

    if("passwordRecoveryRequest" === action){
        //Start recovery sequence
        startRecovery(Spark.data.scriptData);

    } else if ("resetPassword" === action){
        //Start reset sequence
        resetPassword(Spark.data.scriptData);
    }

    else
    {
        // action variable isn't valid, check spelling or value
        status = "invalid action";
    }
    //set an error to prevent the AuthenticationRequest being processed
    Spark.setScriptError("action", status);

}
function generateRecoveryToken(){
    // this should be cryptographically strong, not simply date-based
    var key = "MySecretKey";
    var data = "ResetToken_" + new Date().getTime() + "_" + Math.random();
    var token = Spark.getDigester().hmacSha256Base64(key, data);

    return token;

}
function IsCurrencyDataStarted()
{
    var api = Spark.getGameDataService();
    var entry = api.createItem("currencyData", Spark.getPlayer().getPlayerId());
    var data = entry.getData();
    data.Value = Spark.getData().Value;
    data.playerId = playerId;
    status = entry.persistor().persist().error();

    if(status){
        Spark.setScriptError("ERROR", status);
    }
}
function IsStarsDataStarted()
{
    var api = Spark.getGameDataService();
    var entry = api.createItem("starsdata", Spark.getPlayer().getPlayerId());
    var data = entry.getData();
    data.Stars = Spark.getData().Stars;
}
function IsBoosterDataStarted()
{
    var api = Spark.getGameDataService();
    var entry = api.createItem("boostsData", Spark.getPlayer().getPlayerId());
    var data = entry.getData();
    data.Boosts = Spark.getData().Boosts;
    data.playerId = playerId;
    status = entry.persistor().persist().error();

    if(status){
        Spark.setScriptError("ERROR", status);
    }
}
function sendRecoveryEmail(email, name , token){
    //Here we use sendGrid as an example because we have full integration with their services.
    var myGrid = Spark.sendGrid("Username", "Password");
    //The email to send the message to and the name of the user
    myGrid.addTo( email , name );
    //Here you'd leave your organization or personal email
    myGrid.setFrom("Email", "Name");
    //The subject of your email
    myGrid.setSubject("Subject");
    // The body and message of your email, here we just send the token
    myGrid.setText(token);
    //Finally send the email
    myGrid.send();
}
function startRecovery(request){
    if(!request.email){
        //Either the email variable was not passed in or it was spelt incorrectly
        status = "email variable not passed in";
        return;
    }

    //Get data service
    var api = Spark.getGameDataService();

    //Construct query
    var query = api.S("email").eq(request.email);

    //Attempt to get results
    var resultOBJ = api.queryItems("playerProfile", query)


    //Check for errors
    if(resultOBJ.error()){
        status = "invalid";
        return;
    }else{
        //Get document
        var result = resultOBJ.cursor().next();
    }

    //Check for error
    if(result == null){
        status = "invalid";
        return;
    }


    // Function to generate a unique token
    var token = generateRecoveryToken();
    var player = Spark.loadPlayer( result.getId());

    //Sends the token back with the response
    Spark.setScriptData("token", token)

    //Get data object and insert new token
    var data = result.getData();
    data.token = token;

    //Persist doc and save potential error
    var serviceStatus = result.persistor().persist().error();

    //Check for errors
    if(serviceStatus){
        status = "invalid";
        return;
    }else{
         // Function used to send email
         sendRecoveryEmail(request.email, player.getDisplayName(), token);
        // Successfully found player and attempted to send email
        status = "complete";
    }

}
function resetPassword(request){
    if(!request.token || !request.password){
        status = "Password or token variable not passed in";
        return;
    }
    //Get data service
    var api = Spark.getGameDataService();

    //Construct query
    var query = api.S("token").eq(request.token);

    //Attempt to get results
    var resultOBJ = api.queryItems("playerProfile", query);


    //Check for errors
    if(resultOBJ.error()){
        status = "invalid";
        return;
    }else{
        var result = resultOBJ.cursor().next();
    }

    //Check if any results came back
    if(result == null){
        status = "invalid";
        return;
    }

    //Load data and player
    var player = Spark.loadPlayer(result.getId());
    var data = result.getData();

    //Set the token to null so it wont be used again
    data.token = null;

    //Persist entry
    var serviceStatus = result.persistor().persist().error();

    //Check for error
    if(serviceStatus){
        status = "invalid";
        return;
    }else{
         //Change password
        player.setPassword(request.password);
        //Unlock player just in case too many failed attempts were tried and player was locked
        player.unlock();
        status = "complete";
    }

}*/
