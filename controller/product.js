const { Card, Suggestion } = require('dialogflow-fulfillment')
exports.product = async (agent) => {
  agent.add('ต้องการรับสินค้าประเภทไหนคะ')
  agent.add(
    new Card({
      title: 'Test Card',
      text: `This is the body text of a card.`,
      buttonText: 'This is a button',
    })
  )
  agent.add(new Suggestion('Test Suggestion'))
}
