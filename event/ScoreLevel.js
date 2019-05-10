// ====================================================================================================
//
// Cloud Code for ScoreLevel, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var request = new SparkRequests.LeaderboardsEntriesRequest();
var requestData = new SparkRequests.LeaderboardDataRequest();
var response = request.Send();
var responseData = requestData.Send();
//var virtualdata = response.data;
//var virtualScore = response.Score;
//var virtualLevel = response.Level;
//var playerLevels2 = Spark.getPlayer().getPrivateData(Level);
var playerLevel = Spark.getData().Level;
var playerScore = Spark.getData().Score;
var playerData = {"playerLevel":playerLevel,"playerScore":playerScore };
Spark.getPlayer().setPrivateData("playerData", playerData);