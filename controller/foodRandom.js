const foodList = [{
    name: 'หอหญิง',
    restriction: ["กลางวัน","เย็น"]
},
{
    name: 'KFC (ในมอ)',
    restriction: ["กลางวัน"]
},
{
    name: 'ลานไม้',
    restriction: ["กลางวัน"]
},
{
    name: 'เตี๋ยวเรือ',
    restriction: ["กลางวัน"]
},
{
    name: 'ลุงหนุ่ม',
    restriction: []
},
{
    name: 'KFC',
    restriction: ["นาน"]
},
{
    name: 'ข้าวมันไก่ 45',
    restriction: ["กลางวัน","เย็น"]
},
{
    name: 'มีข้าวมีเตี๋ยว',
    restriction: ["กลางวัน"]
},
{
    name: 'ลานปูน',
    restriction: ["เย็น"]
},
{
    name: 'Santa fe',
    restriction: ["นาน"]
}

]
exports.foodRandom = (agent) => {
    var date = new Date().getDay();
    var time = new Date().getHours()
    if(time + 7 >= 24){
        time = time %24
        date += 1;
        if(date >= 7 ){
            date = date %7;
        }
    }
    let possible = []
    for(let i of foodList){
        if(time <= 14){
            if(i.restriction.length == 0){
                possible.push(i)
            } else {
                if(date == 3 || date == 4){
                    if(i.restriction.indexOf('กลางวัน') != -1){
                        possible.push(i)
                    } else if(i.restriction.indexOf('นาน') != -1){
                        possible.push(i)
                    }
                } else {
                    if(i.restriction.indexOf('กลางวัน') != -1){
                        possible.push(i)
                    }
                }
            }
        } else {
            if(i.restriction.length == 0){
                possible.push(i)
            } else {
                if(i.restriction.indexOf('เย็น') != -1){
                    possible.push(i)
                }
            }
        }
    }
    const ind = parseInt(Math.random() * 1000) % possible.length
    agent.add(possible[ind].name)
}