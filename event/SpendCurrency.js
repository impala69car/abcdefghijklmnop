// ====================================================================================================
//
// Cloud Code for SpendCurrency, write your code here to customize the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://docs.gamesparks.com/
//
// ====================================================================================================
var canSpend = Spark.getPlayer().debit1(Spark.getData().amount);
var request = new new SparkRequests.BuyVirtualGoodsRequest();
request.currencyShortCode = "CURRENCY_1";
request.quantity = 1;
request.shortCode="HEART";
var response = request.Send();