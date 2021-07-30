const { admin } = require("./db");
exports.morning = async (req, res) => {
  const subscriber = [];
  await admin
    .database()
    .ref("/subscriber")
    .on("value", (snapshot) => {
      for (let i in snapshot.val()) {
        subscriber.push(i);
      }
    });

  axios.post(
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
  );
  res.send({ success: true });
};
