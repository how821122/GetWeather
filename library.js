function preprocess_Data(DataArray,Meteorology){
//---Date array
//0,1,2  three day
  var date = DataArray[0];
  var date_array=[];
  for(var i =2;i<5;i++){
    date_array[i-2]=date[i].trim();
  }
 //console.log(date_array);

//---time array
  var time = DataArray[1];
  var time_array=[];
//---tempure array
  var tempure = DataArray[3];
  var tempure_array=[];
//---tempure felt array
  var tempure_felt = DataArray[4];
  var tempure_felt_array = [];
//---wind_direction array
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

//---------------------------------------------
  for(var j =2;j<19;j++){
    time_array[j-2]=time[j].trim();
    tempure_array[j-2]=tempure[j].trim();
    tempure_felt_array[j-2]=tempure_felt[j].trim();
    wind_direction_array[j-2] = wind_direction[j].trim();
    relative_humidity_array[j-2] =relative_humidity[j].trim();
    feeling_array[j-2] = feeling[j].trim();
  }
 
var weather = Meteorology;

   //console.log(Meteorology);
   //
  var alldata = [];
  var w=0;//count for date (0,1,2) 


  for(var k=0;k<17;k++){

    if(time_array[k]!="00:00"){
       
       alldata[k]=[ date_array[w],time_array[k],tempure_array[k],
                    tempure_felt_array[k],wind_direction_array[k],relative_humidity_array[k],
                    feeling_array[k],weather[k]];
    }
    else{
      w=w+1;
      alldata[k]=[ date_array[w],time_array[k],tempure_array[k],
                    tempure_felt_array[k],wind_direction_array[k],relative_humidity_array[k],
                    feeling_array[k],weather[k]];
    }
  }
 
  return alldata ;
  //-----
  //  alldata[x][0]:date,
  //  alldata[x][1]:time,
  //  alldata[x][2]:tempure,
  //  alldata[x][3]:tempure_felt,
  //  alldata[x][4]:wind_direction,
  //  alldata[x][5]:relative_humidity,
  //  alldata[x][6]:feeling_array,
  //  alldata[x][7]:weather
  //-----
 
 }


exports.preprocess_Data = preprocess_Data;
 