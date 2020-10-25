const express = require("express");
const bodyParser = require("body-parser");
const {WebhookClient} = require('dialogflow-fulfillment');
const app = express();
const port =process.env.PORT || 3000
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.post('/api/opbot',(req,res)=>{
    console.log(req);
    const agent = new WebhookClient({ req, res });
    const foodRandom = (agent) => {
        agent.add('Test food random')
    }
    let intentMap = new Map();
    interMap.set('Food Random',foodRandom)
    agent.handleRequest(intentMap);
})
app.listen(port, function() {
  console.log("Server started on port 3000");
});