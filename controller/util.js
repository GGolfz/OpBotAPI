exports.util = (agent)=>{
    let response = ''
    switch(agent.parameters.func){
        case "test":
            response = 'Test: Success';
            break;
        case "random":
            const value = agent.parameters.value;
            const res = random(value)
            response = res
            break;
        case "talk":
            response = agent.parameters.value;
            break;
        case "space":
            response = agent.parameters.value.split('').join(' ')
            break;
        default:
            response = "อะหยังนะ"
    }
    agent.add(''+response)
}
const random = (val) => {
    return parseInt(Math.random() *10000000) % parseInt(val) + 1
}