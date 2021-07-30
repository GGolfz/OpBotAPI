const { admin } = require("./db");
exports.morning = async (req, res) => {
  const subscriber = [];
  await admin.database().ref("/subscriber").get().then(snapshot => {
      console.log(snapshot);
        snapshot.forEach(doc => {
            subscriber.push(doc.value);
        })
  });

  axios.post(
    "https://api.line.me/v2/bot/message/push",
    {
      to: subscriber,
      messages: [{ type: "text", text: message }],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.channel_access_token}`,
      },
    }
  );
};
