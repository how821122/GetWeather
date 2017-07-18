var request = require('request');
var cheerio = require('cheerio');
var fs =require('fs');
var library = require("./library.js");
var Area = require("./label_area.js");



function preprocess_Data(DataArray,Meteorology,url){
//---Date array
//0,1,2  three day
  var date = DataArray[0];
  var date_array=[];
  for(var i =2;i<5;i++){
    date_array[i-2]=date[i].trim();
  }
 //console.log(date_array);

//---Area
 var area=[];
  area = Area.getArea(url);
//---time array
  var time = DataArray[1];
  var time_array=[];
//---tempure array
  var tempure = DataArray[3];
  var tempure_array=[];
//---tempure felt array
  var tempure_felt = DataArray[4];
  var tempure_felt_array = [];
//---rain_percent array//--------------------------
  var rain_percent = DataArray[5];
  var W =[];
  var rain_percent_array;              
//---wind_direction array//------------------------
  var wind_direction = DataArray[6];
  var wind_direction_array=[];
//---relative_humidity array
  var relative_humidity = DataArray[7];
  var relative_humidity_array =[];
//---rain array
  var rain_percent = DataArray[8];
  var rain_percent_array=[];
//---feeling array
  var feeling = DataArray[9];
  var feeling_array=[];
//---weather
  var weather = Meteorology;
//---------------------------------------------
//
for(var i =2;i<11;i++){

  W[i-2]=rain_percent[i].trim();
}

rain_percent_array=[W[0],W[0],W[1],W[1],W[2],W[2],W[3],W[3],W[4],W[4],W[5],W[5],W[6],W[6],W[7],W[7],W[8]];
//----------------------------------------------
  for(var j =2;j<19;j++){
  //-----delte space
    time_array[j-2]=time[j].trim();
    tempure_array[j-2]=tempure[j].trim();
    tempure_felt_array[j-2]=tempure_felt[j].trim();
    wind_direction_array[j-2] = wind_direction[j].trim();
    relative_humidity_array[j-2] =relative_humidity[j].trim();
    feeling_array[j-2] = feeling[j].trim(); 
  }


 
  var alldata = [];
  var w=0;//count for date (0,1,2) 

 
  for(var k=0;k<17;k++){

    if(time_array[k]!="00:00"){
       
       alldata[k] = rain_percent_array[k];

       alldata[k]=[ area,date_array[w],time_array[k],tempure_array[k],
                    tempure_felt_array[k],wind_direction_array[k],relative_humidity_array[k],
                    feeling_array[k],weather[k],wind_direction_array[k],rain_percent_array[k]];
        
    }
    else{
      w=w+1;

      alldata[k] = rain_percent_array[k];
      alldata[k]=[  area,date_array[w],time_array[k],tempure_array[k],
                    tempure_felt_array[k],wind_direction_array[k],relative_humidity_array[k],
                    feeling_array[k],weather[k],wind_direction_array[k],rain_percent_array[k]];
     
    }
  }


  return alldata ;
  //-----
  //  alldata[x][0]:area,
  //  alldata[x][1]:date,
  //  alldata[x][2]:time,
  //  alldata[x][3]:tempure,
  //  alldata[x][4]:tempure_felt,
  //  alldata[x][5]:wind_direction,
  //  alldata[x][6]:relative_humidity,
  //  alldata[x][7]:feeling_array,
  //  alldata[x][8]:weather
  //  alldata[x][9]:rain of probability
  //-----
 
 }


//------------------------------------------------------------------------------------
function getURL() {

    var url_array=[];

    for(var X=0;X<=11;X++){

    var district = 6300000+(X+1)*100;
    var url =  "http://www.cwb.gov.tw/V7/forecast/town368/3Hr/"+district+".htm";
    
    url_array[X] = url ; 
    }
    return url_array;
}
//------------------------------------------------------------------------------------
function Convertjson(Array){

  var file =[];

   for(var k=0;k<Array.length;k++){
    file[k]={
        地區:Array[k][0],
        日期:Array[k][1],
        時間:Array[k][2],
        溫度:Array[k][3],
        體感溫度:Array[k][4],
        風向:Array[k][5],
        相對溼度:Array[k][6],
        舒適度:Array[k][7],
        天氣狀況:Array[k][8],
        降雨機率:Array[k][10]
    }
   }

   return file ;
}
//------------------------------------------------------------------------------------

exports.Convertjson = Convertjson;
exports.preprocess_Data = preprocess_Data;
exports.getURL = getURL;
 