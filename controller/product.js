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
    const context = agent.contexts
    console.log(context)
    let it
    context.map((el) => {
      if (el.name == 'productcode-followup') {
        it = {
          productID: el.parameters.ProductID,
          amount: el.parameters.number,
        }
      }
    })
    const items = agent.context.get('items')
    console.log(items)
    if (items) {
      agent.context.set({
        name: 'items',
        lifespan: 5,
        parameters: { items: [...items.parameters.items, it] },
      })
    } else {
      agent.context.set({
        name: 'items',
        lifespan: 5,
        parameters: { items: [it] },
      })
    }
    console.log(it)
    agent.add('ต้องการสั่งสินค้าต่อหรือไม่')
  } catch (err) {
    console.log(err)
  }
}
exports.productContinue = async (agent) => {
  try {
    agent.add('กรุณากรอกรหัสสินค้า')
  } catch (err) {
    console.log(err)
  }
}
exports.productEnd = async (agent) => {
  try {
    const items = agent.context.get('items')
    const all = items.parameters.items
    console.log(all)
    agent.add('รายการสินค้าทั้งหมด')
    all.map((el) => {
      agent.add('ProductID: ' + el.productID + 'Amount: ' + el.amount)
    })
    agent.context.set({ name: 'items', lifespan: 0, parameters: {} })
  } catch (err) {
    console.log(err)
  }
}
