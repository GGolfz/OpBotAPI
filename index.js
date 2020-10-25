const express = require("express");
const bodyParser = require("body-parser");
const {WebhookClient} = require('dialogflow-fulfillment');
const app = express();
const port =process.env.PORT || 3000
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send({
      success: true
    });
  })
app.post('/api/opbot', (request,response)=>{
    console.log('POST: /');
  console.log('Body: ',request.body);
    
    // const agent = new WebhookClient({ request, response });
    // const foodRandom = (agent) => {
    //     agent.add('Test food random')
    // }
    // let intentMap = new Map();
    // interMap.set('Food Random',foodRandom)
    // agent.handleRequest(intentMap);
})
app.listen(port, function() {
  console.log("Server started on port 3000");
});