module.exports = function (controller) {

    controller.hears([/^hello$/], 'direct_message,direct_mention', function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            // convo.say('This is a BotKit conversation sample.');
            convo.say('Hello Device Management Engineering Team!');

            // convo.ask('What is your favorite color?', function (response, convo) {
            //     convo.say("Cool, I like '" + response.text + "' too!");
            //     convo.next();
            // });
            convo.ask('How are you today?', function (response, convo) {
                convo.say("Cool, happy to know your day is '" + response.text);
                convo.next();
            });
        });

    });
};
