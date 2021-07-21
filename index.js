const express = require('express')
const bodyParser = require('body-parser')
const { WebhookClient } = require('dialogflow-fulfillment')
const app = express()
const port = process.env.PORT || 3000
const { foodRandom } = require('./controller/foodRandom')
const { util } = require('./controller/util')
const { fallback } = require('./controller/fallback')
const { fatgirl, timeTable } = require('./controller/sendImage')
let custom = false;
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send({
    success: true,
  })
})
app.post('/api/opbot', (request, response) => {
  const agent = new WebhookClient({ request, response })
  let intentMap = new Map()
  console.log(agent);
  intentMap.set('Food Random', foodRandom)
  intentMap.set('Function', (agent) => util(agent,() => {
    console.log(custom);
    custom = !custom;
  }))
  intentMap.set('Default Fallback Intent', (agent) => fallback(agent,custom))
  intentMap.set('Fat', fatgirl)
  intentMap.set('Timetable', timeTable)
  agent.handleRequest(intentMap)
})
app.listen(port, function () {
  console.log('Server started on port 3000')
})
