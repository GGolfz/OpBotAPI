const { Image } = require('dialogflow-fulfillment')
exports.fatgirl = (agent) => {
    agent.add(new Image('https://ggolfz.github.io/bot-images/timetable.jpg'))
}
