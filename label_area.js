 //---------------------------------
function getArea(url){

	
    var number = url.substring(46,53);//get the district code form url

    var district;
	

	if (number==6300100) {
		district= "松山" 
	}
		 
	else if(number==6300200){
		district = "信義" ;
	}

	else if(number==6300300){
		district = "大安";
	}
	else if(number==6300400){
		district = "中山" ;
	}
	else if(number==6300500){
		district = "中正" ;
	}
	else if(number==6300600){
		district = "大同" ;
	}
	else if(number==6300700){
		district = "萬華" ;
	}
	else if(number==6300800){
		district = "文山" ;
	}		 
	else if(number==6300900){
		district = "南港" ;
	}	         
	else if(number==6301000){
		district = "內湖" ;
	}	
	else if(number==6301100){
		district = "士林" ;
	}	
	else if(number==6301200){
		district = "北投" ;
	}	
    
    else
    {
    	district = "no result" ;
    }

    return district ;
 
}


exports.getArea = getArea;