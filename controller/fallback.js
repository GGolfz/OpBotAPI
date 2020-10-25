const response = ["อะไรนะ ยัยตัวดี","พ้มไม่เข้าใจ","มันคือไรนะ"]
exports.fallback = (agent) => {
    console.log(agent)
    console.log(Object.keys(agent))
    let answer = parseInt(Math.random() * 100) % 2;
    if(answer == 0){
        agent.add(response[parseInt(Math.random()*100)%response.length])
    } 
}