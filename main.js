var request = require('request');
var cheerio = require('cheerio');
var fs =require('fs');
var library = require("./library.js");
var Area = require("./label_area.js");
 



var url =  "http://www.cwb.gov.tw/V7/forecast/town368/3Hr/"+6301100+".htm";

request(url, function(err, res, body){

    var $ = cheerio.load(body);
//---Get Date & Time
    var Data_Sourse = [];
    $('.Forecast-box tr ').each(function(i, elem){
        Data_Sourse.push($(this).text().split('\n'));
    });
//----Get Weather
    var Meteorology = [];
    $('img').each(function(i, elem){
        Meteorology.push($(this).attr('title'));
    });
//----Print data 
    var area = Area.getArea(url);
    var weather_data = library.preprocess_Data(Data_Sourse,Meteorology);
    
    var total_data = weather_data.concat(area);

    console.log(total_data);

    //-----17:地區

});
 


