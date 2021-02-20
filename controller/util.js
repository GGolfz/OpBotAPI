const {admin} = require('./db')
const axios = require('axios')
exports.util = async (agent)=>{
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
        case "train":
            let temp = agent.parameters.value;
            temp = temp.split(':')
            keyword = temp[0];
            response = temp[1];
            await admin 
            .database()
            .ref('/learning_'+Math.round(Math.random()*100000)).set({keyword,response})
            response = "อป รู้แล้วคั้บ"
            break;
        case "url":
            let tempParam = agent.parameters.value;
            tempParam = tempParam.split('!!!')
            let url = tempParam[0];
            let prefer = null;
            if(tempParam.length > 1){
                prefer = tempParam[1];
            } 
            axios.post('https://aka.cscms.me/api/newUrl',{url,prefer}).then(res=>{
                console.log(res)
                response = 'อะเอาไป: https://aka.cscms.me/' + res.data.shortUrl;
            }).catch(res=>{
                response = 'ไม่ได้น้า เสียใจด้วย อุก้าก'
            })
            break;
        default:
            response = "อะหยังนะ"
    }
    agent.add(''+response)
}
const random = (val) => {
    return parseInt(Math.random() *10000000) % parseInt(val) + 1
}