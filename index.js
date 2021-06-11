const fs = require('fs')
const json2xls = require('json2xls');

fs.readFile('test.json','utf8',(err,data)=>{
    if (err) throw err;
    const json = JSON.parse(data);
    const jsonArray = [];
    json.forEach(function(item){
      let temp = {
        '名称' : item.title,
        '大小' : item.size,
        '创建时间': item.creationTime,
      }
      jsonArray.push(temp);
    });
    
    let xls = json2xls(jsonArray);
    
    fs.writeFileSync('file.xlsx', xls, 'binary');
})