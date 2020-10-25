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
        default:
            response = "อะหยังนะ"
    }
    agent.add(''+response)
}
const randRange = (val1,val2) => {
    let range = parseInt(val2) - parseInt(val1);
    return (parseInt(Math.random() *10000000) % range) + parseInt(val1);
}
const random = (val) => {
    return parseInt(Math.random() *10000000) % parseInt(val) + 1
}