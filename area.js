 //---------------------------------
function Area(number){

	if (number==6300100){
		console.log("松山");
		}
	else if(number==6300200){
		console.log("信義");
	}

	else if(number==6300300){
		console.log("大安");
	}
	else if(number==6300400){
		console.log("中山");
	}
	else if(number==6300500){
		console.log("中正");
	}
	else if(number==6300600){
		console.log("大同");
	}
	else if(number==6300700){
		console.log("萬華");
	}
	else if(number==6300800){
		console.log("文山");
	}		 
	else if(number==6300900){
		console.log("南港");
	}	         
	else if(number==6301000){
		console.log("內湖");
	}	
	else if(number==6301100){
		console.log("士林");
	}	
	else if(number==6301200){
		console.log("北投");
	}	
    
    else
    {
    	onsole.log("no result");
    }
 
}
//-----------------------------------------------

function SplitURL(url){

	var number = url.substring(46,53);
    
     
	return number ;
}
//-----------------------------------------------
//
exports.SplitURL = SplitURL;
exports.Area = Area;