// ====================================================================================================
//
// Cloud Code for ChatToAll, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
    //JSON of Player IDs
    var ID= Spark.getData().Players;
    //Message string
    var chatString = Spark.getData().Message;
    //Sender displayName
    var dName = Spark.getPlayer().getDisplayName();

    //Group the display name and the message in one JSON
    var json = {"displayName":dName, "Message":chatString};

    //Message param is null if you're not using a custom extension of scriptMessage
    var msg = Spark.message(null);
    msg.setPlayerId(ID);
    msg.setMessageData(json);
    msg.send();