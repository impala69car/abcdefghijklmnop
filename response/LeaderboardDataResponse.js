// ====================================================================================================
//
// Cloud Code for LeaderboardDataResponse, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var Scoresplayer = Spark.getData().Score;
var Levelplayer=Spark.getData().Level;
var requestLB = new SparkRequest.SocialLeaderboardDataRequest();
var responseLB = requestLB.Send();
var requestData = new SparkRequest.LeaderboardDataRespnse();
var responseData = requestData.Send();
var ScoreData = responseData.Score;
var scriptDataLB = responseLB.scriptData;
var scriptDataDB = responseData.scriptData;

function setRequestData(){
    var data = Spark.getData()["requestData"];
     Spark.setScriptData("scriptData",requestData);
}

function getRequestData(){
  var data =Spark.getData()["scriptData"]["requestData"];
   return  data;
}