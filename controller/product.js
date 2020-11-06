const { Card, Text, Suggestion, Payload } = require('dialogflow-fulfillment')
exports.product = async (agent) => {
  agent.add('ต้องการรับสินค้าประเภทไหนคะ')
  agent.add(
    new Payload('LINE', {
      type: 'template',
      altText: 'This is an image carousel template',
      template: {
        type: 'image_carousel',
        columns: [
          {
            imageUrl:
              'https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png',
            action: {
              type: 'message',
              label: 'Brown',
              text: 'Brown was selected',
            },
          },
          {
            imageUrl:
              'https://vignette.wikia.nocookie.net/line/images/1/10/2015-cony.png',
            action: {
              type: 'uri',
              label: 'Cony',
              uri: 'https://developers.line.biz',
            },
          },
        ],
      },
    }),
    { sendAsMessage: true }
  )
  agent.add(new Text('Woah'))
  agent.add(new Suggestion('Suggestion1'))
  agent.add(new Suggestion('Suggestion2'))
  agent.add(new Suggestion('Suggestion3'))
  agent.add(new Suggestion('Suggestion4'))
}
