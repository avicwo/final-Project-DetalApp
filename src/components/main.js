Parse.Cloud.define("SendSMS",function(request,response){

	// Requiring the values to send
	var
		getMessage = request.params.message,
		getPhoneTo = '+972-54-2428649',
		getPhoneFrom = "+14133142638",
		accountSid = 'ACa146dd54f999817a064c130b59634c69',
		authToken  = 'c3641e80fa521b9635d0dea0baafee8c';


	//require the Twilio module and create a REST client
	var client = require('twilio')(accountSid, authToken);

	client.messages
	.create({
		body: getMessage, // Any number Twilio can deliver to
		from: getPhoneFrom, // A number you bought from Twilio and can use for outbound communication
		to: getPhoneTo // body of the SMS message
	})
	.then(function(results) {
		response.success(results.sid);
	})
	.catch(function(error) {
		response.error(error);
	})
});