// ====================================================================================================
//
// Cloud Code for ChallengeIssuedMessage, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var request = new SparkRequests.AcceptChallengeRequest();
request.challengeInstanceId = Spark.getData().challenge.challengeId;
request.Send();