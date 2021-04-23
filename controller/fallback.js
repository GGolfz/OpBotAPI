const {admin} = require('./db')
const response = ['อะไรนะ ยัยตัวดี', 'พ้มไม่เข้าใจ', 'มันคือไรนะ']
exports.fallback = async (agent,custom) => {
    if(custom) {
        agent.add(agent.query);
        return;
    }
    let answer = parseInt(Math.random() * 100) % 3
    await admin
        .database()
        .ref('/')
        .on('value', (snapshot) => {
        let data = snapshot.val()
        const keys = Object.keys(data)
        for(let el of keys) {
            if (data[el].keyword == agent.query) {
            agent.add(data[el].response)
            answer=999
            break;
            }
        }
        if (answer == 0) {
          agent.add(response[parseInt(Math.random() * 100) % response.length])
        }
    })
}