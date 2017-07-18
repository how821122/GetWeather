var request = require('request');
var cheerio = require('cheerio');
var fs= require('fs');
var GetDistrict = require("./label_area.js");
var library = require("./library.js");

var url = library.getURL();
 
 for(var k=0;k<12;k++){ 
        loop(k,k*1000);
      }
 
setInterval(function(){
       
  for(var k=0;k<12;k++){ 
        loop(k,k*1000);
      }
},10800000);//3hr = 1000ms * 60 * 60 * 3 =10800000ms

 

//------------------------------------------------------------------
 
function loop(k,time){
  setTimeout(function WW(){
  Get(url[k]);
 },time);
}


 //-------------------------------------------------------------------
function Get(url){

   request(url, function(err, res, body){

    var $ = cheerio.load(body);
 
    var Data_Sourse = [];//
    $('.Forecast-box tr ').each(function(i, elem){
        Data_Sourse.push($(this).text().split('\n'));
    });

    var Meteorology = [];//
    $('img').each(function(i, elem){
        Meteorology.push($(this).attr('title'));
    });
 
   var total_data =  library.preprocess_Data(Data_Sourse,Meteorology,url);//Array 

   var file = library.Convertjson(total_data);//json file

   var jsonText = JSON.stringify(file[0]," "," ");
   console.log(jsonText);
  
 
  fs.appendFile("result.json",jsonText);//持續寫入
  //fs.writeFile("result.json","XX");//覆蓋寫入
  //
  //
  });
}










 

 
 


 

