exports.util = (agent)=>{
    console.log(agent.client.body.queryResult)
    agent.add(agent.client.body.queryResult)
}