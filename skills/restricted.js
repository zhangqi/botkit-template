module.exports = function (controller) {

    controller.hears([/^Did you have lunch?$/], "direct_message,direct_mention", function (bot, message) {

        bot.startConversation(message, function (err, convo) {
            convo.say("No, i'm in meeting.");
            convo.ask("Did you have lunch?", [
                {
                    pattern: "^yes|no$",
                    callback: function (response, convo) {
                        // convo.say('Cool, I like ' + response.text + ' too!');
                        convo.say('ok');
                        convo.next();
                    },
                },
                {
                    default: true,
                    callback: function (response, convo) {
                        convo.say("Sorry, I don't know this color. Try another one...");
                        convo.repeat();
                        convo.next();
                    }
                }
            ]);
        });
    });
};
