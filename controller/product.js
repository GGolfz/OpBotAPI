const { Card, Suggestion } = require('dialogflow-fulfillment')
exports.product = async (agent) => {
  agent.add('ต้องการรับสินค้าประเภทไหนคะ')
  agent.add(
    new Card({
      title: 'Test Card',
      imageUrl: 'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
      text: `This is the body text of a card.`,
      buttonText: 'This is a button',
      buttonUrl: 'https://assistant.google.com/'
    })
  )
  agent.add(new Suggestion('Test Suggestion'))
}
