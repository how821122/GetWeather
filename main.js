var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var Printdata = require("./function_Printall_Per3hourData.js");
var area = require("./area.js");


var url = "http://www.cwb.gov.tw/V7/forecast/town368/3Hr/6301000.htm";//內湖

request(url, function(err, res, body){
    // 去跟中央氣象局的網站要資料
   
  var $ = cheerio.load(body);
    // 把要到的資料放進 cheerio

	var Data_Sourse = []
    $('.Forecast-box tr').each(function(i, elem){
        Data_Sourse.push($(this).text().split('\n'));
    });
    var district = area.SplitURL(url);
    
    var Weather_Data =Printdata.print_total(Data_Sourse);
    
    area.Area(district);
    
    console.log(Weather_Data);

    fs.writeFileSync("result.json", JSON.stringify(Weather_Data,",",3));

 
})