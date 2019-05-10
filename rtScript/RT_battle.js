// ====================================================================================================
//
// Cloud Code for RT_battle, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
// Script referenced by this code: TANK_BATTLE RT-script on GameSparks Portal

var playersJoined = []; // this is only used at the start to make sure each player is connected

RTSession.onPlayerConnect(function(player){
    // first we check to see if the player has already joined the match
    if(!contains(player.getPeerId(), playersJoined)){
        playersJoined.push(player.getPeerId()); // and add them if not
    }
// next we check to see the max (or min) number of players has joined that match
    if(playersJoined.length === 4){
        RTSession.newPacket().setOpCode(100).setTargetPeers().send(); // send an empty pack back to all players

    }
});

function contains(a, obj) { // this is a simple method that just checks if an element is in an array or not
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}