// ====================================================================================================
//
// Cloud Code for MatchFoundMessage, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
if (Spark.getPlayer().getPlayerId() === Spark.getData().participants[0].id) {
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var request = new SparkRequests.CreateChallengeRequest();
    request.challengeShortCode = "DefaultChallenge";
    request.endTime = tomorrow.toISOString();
    request.usersToChallenge = Spark.getData().participants[1].id;
    request.Send();
}