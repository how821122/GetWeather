var request = require('request');
var cheerio = require('cheerio');
var fs= require('fs');

var library = require("./library.js");

var Area = library.getURL();
 

  request(Area[1], function(err, res, body){

    var $ = cheerio.load(body);
 
    var Data_Sourse = [];//
    $('.Forecast-box tr ').each(function(i, elem){
        Data_Sourse.push($(this).text().split('\n'));
    });

    var Meteorology = [];//
    $('img').each(function(i, elem){
        Meteorology.push($(this).attr('title'));
    });
 
   var total_data =  library.preprocess_Data(Data_Sourse,Meteorology,Area[1]);//Array 

   var file = library.Convertjson(total_data);//json file

   var jsonText = JSON.stringify(file[0]," "," ");
   console.log(file);
  

  //fs.appendFile("result.json",total_data);//持續寫入
  //fs.writeFile("result.json","XX");//覆蓋寫入
  //
  //
 });


//--
/*
setInterval(function(){
    
},10000);

*/
//--








 

 
 


 

