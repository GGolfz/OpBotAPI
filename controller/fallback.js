const admin = require('firebase-admin'); 
var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
};
admin.initializeApp(firebaseConfig);
var database = admin.database()
var dbRef = database.ref('/')
const response = ["อะไรนะ ยัยตัวดี","พ้มไม่เข้าใจ","มันคือไรนะ"]
exports.fallback = async (agent) => {
    try{
        console.log("TEST Fallback")
    await dbRef.on('value',(snapshot)=>{
        let data =snapshot.val()
        console.log(data)
        data.map(el=>{
            if(el.keyword == agent.query){
                console.log(el)
                agent.add(el.response)
                return;
            }
        })
        let answer = parseInt(Math.random() * 100) % 2;
        if(answer == 0){
            agent.add(response[parseInt(Math.random()*100)%response.length])
        } 
    })
    } catch(err){
        console.log(err)
    }
}
