const { Card, Text, Suggestion, Payload } = require('dialogflow-fulfillment')
exports.product = async (agent) => {
  try {
    // works
    agent.add('กรุณากรอกรหัสสินค้า')
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
    // agent.add(new Text('Test Text'))
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
    //               text: 'ลงทะเบียน',
    //             },
    //           },
    //           {
    //             type: 'action',
    //             action: {
    //               type: 'message',
    //               label: 'EMS',
    //               text: 'EMS',
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

exports.productSelectCode = async (agent) => {
  try {
    agent.add('กรุณาระบุจำนวนที่ต้องการ')
  } catch (err) {
    console.log(err)
  }
}
exports.productSelectAmount = async (agent) => {
  try {
    const context = agent.contexts;
    let it;
    context.map(el=>{
      if(el.name == 'productcode-followup'){
        it= {
          productID: el.parameters.ProductID,
          amount: el.parameters.number 
        }
      }
    })
    const items = agent.context.get("items");
    if(items){
      console.log(items.parameters);
    } else {
      agent.context.set({name:'items',lifespan:5,parameters:[it]})
    }
    console.log(it)
  } catch (err) {
    console.log(err)
  }
}