const express = require("express");
const bodyParser = require("body-parser");
const {WebhookClient} = require('dialogflow-fulfillment');
const app = express();
const port =process.env.PORT || 3000
const {foodRandom} = require('./controller/foodRandom')
const {util} = require('./controller/util')
const {fallback} = require('./controller/fallback')
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send({
      success: true
    });
  })
app.post('/api/opbot', (request,response)=>{
    const agent = new WebhookClient({ request, response });
    let intentMap = new Map();
    intentMap.set('Food Random',foodRandom)
    intentMap.set('Function',util)
    intentMap.set('Default Fallback Intent',fallback)
    agent.handleRequest(intentMap);
})
app.listen(port, function() {
  console.log("Server started on port 3000");
});