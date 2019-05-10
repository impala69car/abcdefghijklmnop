// ====================================================================================================
//
// Cloud Code for TryTimer2, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var day1=1;
var day2=8;
var day3=15;
var day4=22;
var day5=28;
var time = new Date().toISOString();
Spark.setScriptData(time,day1+"^"+day2+"^"+day3+"^"+day4+"^"+day5);