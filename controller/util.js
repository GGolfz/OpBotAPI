exports.util = (agent)=>{
    switch(agent.parameters.func){
        case "test":
            agent.add('Test: '+agent.parameters.value)
        case "random":
            const value = agent.parameters.value;
            if(value.indexOf('-') != -1){
                const v = value.split('-')
                const res = randRange(v[0],v[1])
                agent.add(res)
            } else {
                const res = random(value)
                agent.add(res)
            }
    }
}
const randRange = (val1,val2) => {
    let range = parseInt(val2) - parseInt(val1);
    return (parseInt(Math.random() *10000000) % range) + parseInt(val1);
}
const random = (val) => {
    return parseInt(Math.random() *10000000) % parseInt(val) + 1
}