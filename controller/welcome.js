const response = [
  'อะหยัง',
  'แว่ๆๆๆ',
  'มีอะหยัง',
  'อ้ากกกก มันไม่เด้ง ทันมึ้ย',
  'มีอะหยังคับ',
]
exports.welcome = async (agent) => {
    await timeout(15000);
    await agent.add(response[parseInt(Math.random()*100)%response.length])
}

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
