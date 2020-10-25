exports.util = (agent)=>{
    console.log(agent.request_.client.body.queryResult)
    agent.add(agent.request_.client.body.queryResult)
}