const foodList = [
  { name: "กะเพรา", type: "prefix" },
  { name: "ผัดพริกแกง", type: "suffix" },
  { name: "ผัดผงกะหรี่", type: "suffix" },
  { name: "ทอดกระเทียม", type: "suffix" },
  { name: "ผัดขี้เมา", type: "prefix" },
  { name: "ผัดน้ำมันหอย", type: "suffix" },
  { name: "ผัดพริกเผา", type: "suffix" },
  { name: "ผัดไข่เค็ม", type: "suffix" },
  { name: "ผัดไท", type: "prefix" },
  { name: "ข้าวผัด", type: "prefix" },
  { name: "ผัดผักบุ้งไฟแดง", type: "prefix" },
  { name: "ไข่เจียว", type: "prefix" },
  { name: "แกงจืด", type: "prefix" },
  { name: "ไข่ลาวา", type: "suffix" },
  { name: "ต้มยำ", type: "prefix" },
  { name: "แกงเขียวหวาน", type: "prefix" },
  { name: "ข้าวผัดต้มยำ", type: "prefix" },
  { name: "ผัดมักกะโรนี", type: "prefix" },
  { name: "แกงส้ม", type: "prefix" },
  { name: "เส้นใหญ่ราดหน้า", type: "prefix" },
  { name: "เส้นหมี่ราดหน้า", type: "prefix" },
  { name: "หมี่กรอบราดหน้า", type: "prefix" },
  { name: "เส้นใหญ่ผัดซีอิ๊ว", type: "prefix" },
  { name: "เส้นหมี่ผัดซีอิ๊ว", type: "prefix" },
  { name: "หมี่กรอบผัดซีอิ๊ว", type: "prefix" },
  { name: "ผัดมาม่า", type: "prefix" },
  { name: "สุกี้น้ำ", type: "prefix" },
  { name: "สุกี้แห้ง", type: "prefix" },
  { name: "ก๋วยเตี๋ยวคั่ว", type: "prefix" },
  { name: "เส้นหมี่ผัดผักกระเฉด", type: "prefix" },
  { name: "สปาเกตตีผัดขี้เมา", type: "prefix" },
  { name: "มักกะโรนีผัดขี้เมา", type: "prefix" },
  { name: "ส้มตำ", type: "individual" },
  { name: "น้ำตกหมู", type: "individual" },
];
const meetList = ["หมู", "หมูสับ", "ไก่", "หมูกรอบ", "กุ้ง", "ปลาหมึก"];
exports.foodRandom = (agent) => {
  const ind = parseInt(Math.random() * 1000) % foodList.length;
  if (foodList[ind].type === "individual") {
    agent.add(foodList[ind].name);
  } else if (foodList[ind].type === "prefix") {
    agent.add(
      foodList[ind].name +
        " " +
        meetList[parseInt(Math.random() * 1000) % meetList.length]
    );
  } else if (foodList[ind].type === "suffix") {
    agent.add(
      meetList[parseInt(Math.random() * 1000) % meetList.length] +
        " " +
        foodList[ind].name
    );
  }
};
