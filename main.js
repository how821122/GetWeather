var request = require('request');
var cheerio = require('cheerio');
var fs =require('fs');
var library = require("./library.js");
var area = require("./label_area.js");



var url = "http://www.cwb.gov.tw/V7/forecast/town368/3Hr/6301000.htm";//內湖

request(url, function(err, res, body){
    // 去跟中央氣象局的網站要資料
   
  var $ = cheerio.load(body);
    // 把要到的資料放進 cheerio

	var Data_Sourse = []
    $('.Forecast-box tr').each(function(i, elem){
        Data_Sourse.push($(this).text().split('\n'));
    });
     
    
    var district = area.Area(url);

    var Weather_Data =library.print_total(Data_Sourse);

    console.log(district,Weather_Data);

    fs.writeFileSync("result.json", JSON.stringify(Weather_Data,",",3));

 
})