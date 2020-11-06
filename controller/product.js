const {Card} = require('dialogflow-fulfillment')
exports.product = async (agent) => {
    agent.add('ต้องการรับสินค้าประเภทไหนคะ')
    agent.add(new Card({title:'Test Card'}));
}