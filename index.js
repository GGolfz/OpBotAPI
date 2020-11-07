const express = require('express')
const bodyParser = require('body-parser')
const { WebhookClient } = require('dialogflow-fulfillment')
const app = express()
const port = process.env.PORT || 3000
const { foodRandom } = require('./controller/foodRandom')
const { util } = require('./controller/util')
const { fallback } = require('./controller/fallback')
const { fatgirl } = require('./controller/sendImage')
const { product, productSelectCode, productSelectAmount, productContinue, productEnd } = require('./controller/product')
app.use(bodyParser.json())
app.get('/', (req, res) => {
  res.send({
    success: true,
  })
})
app.post('/api/opbot', (request, response) => {
  const agent = new WebhookClient({ request, response })
  let intentMap = new Map()
  intentMap.set('Food Random', foodRandom)
  intentMap.set('Function', util)
  intentMap.set('Default Fallback Intent', fallback)
  intentMap.set('Fat', fatgirl)
  intentMap.set('Product',product)
  intentMap.set('ProductCode',productSelectCode)
  intentMap.set('ProductAmount',productSelectAmount)
  intentMap.set('ProductYes',productContinue)
  intentMap.set('ProductNo',productEnd)
  agent.handleRequest(intentMap)
})
app.listen(port, function () {
  console.log('Server started on port 3000')
})
