const { Card, Text, Suggestion, Payload } = require('dialogflow-fulfillment')
exports.product = async (agent) => {
  try {
    // works
    agent.add('ต้องการรับสินค้าประเภทไหนคะ')
    // works first when clicked it will repeat message second is link
    // agent.add(
    //   new Payload(
    //     'LINE',
    //     {
    //       type: 'template',
    //       altText: 'This is an image carousel template',
    //       template: {
    //         type: 'image_carousel',
    //         columns: [
    //           {
    //             imageUrl:
    //               'https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png',
    //             action: {
    //               type: 'message',
    //               label: 'Brown',
    //               text: 'Brown was selected',
    //             },
    //           },
    //           {
    //             imageUrl:
    //               'https://vignette.wikia.nocookie.net/line/images/1/10/2015-cony.png',
    //             action: {
    //               type: 'uri',
    //               label: 'Cony',
    //               uri: 'https://developers.line.biz',
    //             },
    //           },
    //         ],
    //       },
    //     },
    //     { sendAsMessage: true }
    //   )
    // )
    // works
    agent.add(new Text('Test Text'))
    // suggestion
    // agent.add(
    //   new Payload(
    //     'LINE',
    //     {
    //       type: 'text',
    //       text: 'ต้องการเลือกช่องทางจัดส่งแบบไหนคะ',
    //       quickReply: {
    //         items: [
    //           {
    //             type: 'action',
    //             action: {
    //               type: 'message',
    //               label: 'ลงทะเบียน',
    //               tect: 'ลงทะเบียน',
    //             },
    //           },
    //           {
    //             type: 'action',
    //             action: {
    //               type: 'message',
    //               label: 'EMS',
    //               tect: 'EMS',
    //             },
    //           },
    //         ],
    //       },
    //     },
    //     { sendAsMessage: true }
    //   )
    // )
  } catch (err) {
    console.log(err)
  }
}
