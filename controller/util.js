exports.util = (agent)=>{
    console.log(agent)
    agent.add(JSON.stringify(agent))
}