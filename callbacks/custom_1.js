// ====================================================================================================
//
// Cloud Code for custom_1, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Spark .setScriptData ( "RESPONSE_RAW" , "Hello World!" );
// Used to make sure FB recognises this callback URL as a valid endpoint //
// Used to make sure FB recognises this callback URL as a valid endpoint //
if(Spark.getData()['hub.challenge'] != null && Spark.getData()['hub.challenge'] != "" && Spark.getData()['hub.challenge'] != 'undefined'){
  Spark.setScriptData("RESPONSE_RAW", Spark.getData()['hub.challenge']); // just return the code FB sent here
}

else {
// we want to go through all transactions that were returned //
for(var i = 0; i < JSON.parse(Spark.getData()["REQUEST_BODY"]).entry.length; i++){
    var transactionID = JSON.parse(Spark.getData()["REQUEST_BODY"]).entry[i].id;
    // Using the Facebook appId and secret to get an access token //
    var tokenResp = Spark.getHttp("https://graph.facebook.com/oauth/access_token?grant_type=client_credentials&client_id=/*Client Id*/&client_secret=/*Client Secret*/").get();
    var accessToken = tokenResp.getResponseString().split('|');
}
var URL = "https://graph.facebook.com/v2.6/"+transactionID+"?fields=id%2Cuser%2Citems&"+accessToken[0]+"%7C"+accessToken[1];
var resp = Spark.getHttp(URL).get();
var items = resp.getResponseJson().items;

//Get data service
var API = Spark.getGameDataService();

//Build entry
var entry = API.createItem("FBResponseRAW", transactionID);
var data = entry.getData();
data.transaction = resp.getResponseJson();

//Persist entry
var status = entry.persistor().persist().error();

//Check if document saved
if(status){
    //return error if persistence interrupted
    Spark.setScriptError("ERROR", status)
}}