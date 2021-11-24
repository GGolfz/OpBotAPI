const { Image } = require("dialogflow-fulfillment");
const imgList = [
  "1.jpg",
  "2.jpeg",
  "3.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.JPG",
  "8.JPG",
  "9.JPG",
  "10.JPG",
];
exports.fatgirl = (agent) => {
  console.log(
    "https://ggolfz.me/opbot/image/" +
      imgList[parseInt(Math.random() * 100) % imgList.length]
  );
  agent.add(
    new Image(
      "https://ggolfz.me/opbot/image/" +
        imgList[parseInt(Math.random() * 100) % imgList.length]
    )
  );
};
exports.timeTable = (agent) => {
  let year = agent.parameters.year;
  if (year >= 1 && year <= 4) {
    agent.add(
      new Image("https://ggolfz.me/opbot/image/" + "y" + year + ".png")
    );

    if (year == 2 || year == 3) {
      agent.add(
        new Image(
          "https://ggolfz.me/opbot/image/" + "y" + year + "ft" + ".png"
        )
      );
    }
  } else {
    agent.add("พ้มจะไปรู้ได้ยังไงนะ");
  }
};
