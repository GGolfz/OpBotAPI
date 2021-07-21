const { admin } = require("./db");
const axios = require("axios");
exports.util = async (agent, cb) => {
  let response = "";
  console.log(agent.parameters.func);
  switch (agent.parameters.func) {
    case "test":
      response = "Test: Success";
      break;
    case "opcast":
      response = "ประกาศแล้วจ้า";
      axios.post(
        "https://api.line.me/v2/bot/message/broadcast",
        { messages: [{ type: "text", text: agent.parameters.value }] },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.channel_access_token}`,
          },
        }
      );
      break;
    case "random":
      const value = agent.parameters.value;
      const res = random(value);
      response = res;
      break;
    case "tellop":
      let message = agent.parameters.value;
      response = "เดี๋ยวบอกอปให้น้าเตง"
      axios.post(
        "https://api.line.me/v2/bot/message/push",
        {
          to: process.env.line_user_id,
          messages: [{ type: "text", text: message }],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.channel_access_token}`,
          },
        }
      );
      break;
    case "talk":
      response = agent.parameters.value;
      break;
    case "space":
      response = agent.parameters.value.split("").join(" ");
      break;
    case "train":
      let temp = agent.parameters.value;
      temp = temp.split(":");
      keyword = temp[0];
      resp = temp[1];
      let dbRef = admin.database().ref("/");
      await dbRef
        .orderByChild("keyword")
        .equalTo(keyword)
        .on("value", (s) => {
          if (s.length > 0) response = "อปรู้แล้วอะเตง ไม่เรียนซ้ำหรอกแบร่";
        });
      if (response != "") {
        break;
      }
      await admin
        .database()
        .ref("/learning_" + Math.round(Math.random() * 100000))
        .set({ keyword, response: resp });
      response = "อป รู้แล้วคั้บ";
      break;
    case "url":
      let tempParam = agent.parameters.value;
      tempParam = tempParam.split("!!!");
      let url = tempParam[0];
      let prefer = null;
      if (tempParam.length > 1) {
        prefer = tempParam[1];
      }
      await axios
        .post("https://aka.cscms.me/api/newUrl", { url, prefer })
        .then((res) => {
          console.log(res);
          response = "อะเอาไป: https://aka.cscms.me/" + res.data.shortUrl;
        })
        .catch((res) => {
          response = "ไม่ได้น้า เสียใจด้วย อุก้าก";
        });
      break;
    case "mode":
      response = "เปลี่ยนโหมดแร้ว";
      cb();
      break;
    default:
      response = "อะหยังนะ";
  }
  agent.add("" + response);
};
const random = (val) => {
  return (parseInt(Math.random() * 10000000) % parseInt(val)) + 1;
};
