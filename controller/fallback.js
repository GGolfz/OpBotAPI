const admin = require('firebase-admin')
var seviceAccountKey = {
  type: process.env.type,
  project_id: process.env.project_id,
  private_key_id: process.env.private_key_id,
  private_key: process.env.private_key.replace(/\\n/g, '\n'),
  client_email: process.env.client_email,
  client_id: process.env.client_id,
  auth_uri: process.env.auth_uri,
  token_uri: process.env.token_uri,
  auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
  client_x509_cert_url:process.env.client_x509_cert_url
}
console.log(JSON.stringify(seviceAccountKey))
admin.initializeApp({
  credential: admin.credential.cert(seviceAccountKey),
  databaseURL: process.env.databaseURL,
})
const response = ['อะไรนะ ยัยตัวดี', 'พ้มไม่เข้าใจ', 'มันคือไรนะ']
exports.fallback = async (agent) => {
  await admin
    .database()
    .ref('/')
    .on('value', (snapshot) => {
      let data = snapshot.val()
      Object.keys(data).map((el) => {
        if (data[el].keyword == agent.query) {
          agent.add(data[el].response)
          return
        }
      })
      let answer = parseInt(Math.random() * 100) % 2
      if (answer == 0) {
        agent.add(response[parseInt(Math.random() * 100) % response.length])
      }
    })
}