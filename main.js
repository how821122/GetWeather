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

    var W = per3Hdata(Data_Sourse,2,X)

    console.log(district,Weather_Data);

    fs.writeFileSync("result.json", JSON.stringify(Weather_Data,",",3));

 
})

//----------------------------------------------------------------------------------------
function print_total(Data_Sourse){

    var DayOfWeek=2;
    var section =2;
    var W= new Object();

  for(section =2;section<=18;section++){
     var X = per3Hdata(Data_Sourse,DayOfWeek,section).time.substring(1,6);//幾點，若是00:00--->日期+1
   //-------------------------------判斷是否換日  
     if(X==00){
      DayOfWeek=DayOfWeek+1;
      }
    else{
      DayOfWeek=DayOfWeek; 
      }

    //----------------------------
     W[section-2] = per3Hdata(Data_Sourse,DayOfWeek,section);
    }
    return W ;//回傳一個陣列作為輸出
}