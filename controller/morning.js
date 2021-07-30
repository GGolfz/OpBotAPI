const { admin } = require("./db");
const axios = require('axios');
exports.morning = async (req, res) => {
  const subscriber = [];
  await admin
    .database()
    .ref("/subscriber")
    .on("value", async (snapshot) => {
      let data = await snapshot.val();
      for (let i in data) {
        subscriber.push(i);
      }
      console.log(subscriber);
      await axios.post(
        "https://api.line.me/v2/bot/message/push",
        {
          to: subscriber,
          messages: [{ type: "text", text: 'Good Morning ค้าบเทอ' }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.channel_access_token}`,
          },
        }
      ).catch(err=> console.log(err));
      res.send({ success: true });
    });
};
