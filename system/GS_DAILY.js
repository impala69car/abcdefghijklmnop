// ====================================================================================================
//
// Cloud Code for GS_DAILY, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var today = new Date;


if(today.getDate() === 1){

    //Load league Leaderboards
    var bronzeLDR = Spark.getLeaderboards().getLeaderboard("bronze");
    var silverLDR = Spark.getLeaderboards().getLeaderboard("silver");
    var goldLDR = Spark.getLeaderboards().getLeaderboard("gold");;

    //Loads top 10 entries, forget top league because they can't promote
    var bronzeLDR_TOP = bronzeLDR.getEntries(10, 0);
    var silverLDR_TOP = silverLDR.getEntries(10, 0);

    //Loads bottom 10 entries, forget bottom league because they can't demote
    var silverLDR_BOT = silverLDRgetEntries(10, silverLDR.getEntryCount() - 10);
    var goldLDR_BOT = silverLDR.getEntries(10, goldLDR.getEntryCount() - 10);

    //Go through top entries and promote their players
    while(bronzeLDR_TOP.hasNext()){
        var pID = bronzeLDR_TOP.next().getUserId()
        Spark.loadPlayer(pID).setSegmentValue("league", "silver");
    }
    while(silverLDR_TOP.hasNext()){
        var pID = silverLDR_TOP.next().getUserId()
        Spark.loadPlayer(pID).setSegmentValue("league", "gold");
    }

    //Go through bottom entries and demote their players
    while(silverLDR_BOT.hasNext()){
        var pID = silverLDR_BOT.next().getUserId();
        Spark.loadPlayer(pID).setSegmentValue("league", "bronze");

    }
    while(goldLDR_BOT.hasNext()){
        var pID = goldLDR_BOT.next().getUserId();
        Spark.loadPlayer(pID).setSegmentValue("league", "silver");
    }

}