// ====================================================================================================
//
// Cloud Code for custom_2, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var requestRaw = Spark.getData(); 
Spark.getLog().debug( "TEST RAW_REQUEST:" + JSON .stringify(requestRaw)); 
if (requestRaw.key === 'test_endpoint' ){ 
    // this is used to test the endpoint is working correctly 
    Spark.setScriptData( "RESPONSE_RAW" , "endpoint-valid" ); 
}
else if (requestRaw.key === 'test_lb' )
{ // check that this lb is valid 
    var lb = Spark.getLeaderboards().getLeaderboard(requestRaw.lb_name); 
    if (lb){ 
        if (lb.isPartitioned())
        { 
            Spark.setScriptData( "RESPONSE_RAW" , "requires-partition" ); 
        } 
        else 
        { 
            Spark.setScriptData( "RESPONSE_RAW" , "valid-lb-name" ); 
        } 
        
    } 
    else 
    {
        Spark.setScriptData( "RESPONSE_RAW" , "invalid-lb-name" ); 
        
    } 
    
}