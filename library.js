var request = require('request');
var area = require("./label_area.js");
//----------------------------------------------------------//
//---------------整理每三個小時的數據-----------------------//
//----------------------------------------------------------//
//DataArray=抓下來尚未整理的資料
//DayOfWeek= 因為星期X給會隨時間變化推移,需要重新進行判斷
//After_2XHour==> "現在"標籤 =2,  經過 (X-2)*3小時
function per3Hdata(DataArray,DayOfWeek,AfterXHour){
  
   var Weather =new Object(); 

       Weather.DayOfWeek=DataArray[0][DayOfWeek];//日期要排序
       Weather.time=DataArray[1][AfterXHour];
       Weather.Tempure=DataArray[3][AfterXHour];
       Weather.Tempure_feel=DataArray[4][AfterXHour];
       Weather.wind_direction=DataArray[6][AfterXHour];
       Weather.relative_humidity=DataArray[7][AfterXHour];
       //Weather.rain=DataArray[8][AfterXHour],//每六個小時才算一次
       Weather.feeling=DataArray[9][AfterXHour];

       return Weather;
 }
//-----------------------------------------------------------------------------------------------------
function print_total(Data_Sourse){

    var DayOfWeek=2;
    var W =[];
    var section =2;
    

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


exports.per3Hdata = per3Hdata;
exports.print_total = print_total;