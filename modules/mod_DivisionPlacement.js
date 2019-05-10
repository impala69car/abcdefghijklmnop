// ====================================================================================================
//
// Cloud Code for mod_DivisionPlacement, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
//Load player
var currentPlayer = Spark.loadPlayer(pID);
//While loop condition
var positioned = false;
//Loop counter
var loop = 1;
//Player's league
var league = currentPlayer.getSegmentValue("league");


//While loop will check if divisions have space for this player
while(positioned === false){
   //Load the division based on the loop counter and check if it has space
    var ldrName = "ldr_Global.division.".concat(loop.toString()).concat(".league.").concat(league);
    if(Spark.getLeaderboards().getLeaderboard(ldrName) !== null){
        //Check if there's less than 100 entries (100 players)
        if(Spark.getLeaderboards().getLeaderboard(ldrName).getEntryCount() < 100){
            currentPlayer.setScriptData("division", loop);
            positioned = true;

        }else{  
            //If division is full, look into the next one
            loop = loop + 1;
        }
    } else{
        //If the division doesn't exist, set it as the player's division
        currentPlayer.setScriptData("division", loop);
        positioned = true;
    }
}