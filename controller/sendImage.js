const { Image } = require('dialogflow-fulfillment')
const imgList = ["1.jpg","2.jpeg","3.JPG","4.JPG","5.JPG","6.JPG","7.JPG","8.JPG","9.JPG","10.JPG"]
exports.fatgirl = (agent) => {
    console.log('https://ggolfz.codes/opbot/image/'+imgList[parseInt(Math.random*100)%imgList.length])
    agent.add(new Image('https://ggolfz.codes/opbot/image/'+imgList[parseInt(Math.random*100)%imgList.length]))
}
