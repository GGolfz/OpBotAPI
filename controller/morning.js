const { admin } = require("./db");
const axios = require('axios');
exports.morning = async (req, res) => {
  const subscriber = [];
  await admin
    .database()
    .ref("/subscriber")
    .once("value", async (snapshot) => {
      let data = await snapshot.val();
      for (let i in data) {
        subscriber.push(i);
      }
      await axios.post(
        "https://api.line.me/v2/bot/message/multicast",
        {
          to: subscriber,
          messages: [{ type: "text", text: 'จู้ดมอนิ่งคับ🐈❕' }],
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

exports.lunch = async (req, res) => {
  const subscriber = [];
  await admin
    .database()
    .ref("/subscriber")
    .once("value", async (snapshot) => {
      let data = await snapshot.val();
      for (let i in data) {
        subscriber.push(i);
      }
      await axios.post(
        "https://api.line.me/v2/bot/message/multicast",
        {
          to: subscriber,
          messages: [{ type: "text", text: 'เที่ยงแล้วอย่าลืมกินข้าวนะคับ ♡ ( ⌯′-′⌯)' }],
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

exports.night = async (req, res) => {
  const subscriber = [];
  await admin
    .database()
    .ref("/subscriber")
    .once("value", async (snapshot) => {
      let data = await snapshot.val();
      for (let i in data) {
        subscriber.push(i);
      }
      await axios.post(
        "https://api.line.me/v2/bot/message/multicast",
        {
          to: subscriber,
          messages: [{ type: "text", text: 'ฝันดีควัฟ' }],
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