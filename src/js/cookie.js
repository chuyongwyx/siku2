 /*function removeCookie(key){document.cookie = encodeURIComponent(key)+';path=/'+"=;expires=" + new Date(0);
}
*/
 //创建cookie
 function createCookie(key,value,days){
 	 var cookies =''+key+'='+value+';path=/';
 	 var  Day = new Date();
     var setday	= Day.setDate(Day.getDate()+days);
 	 cookies = cookies +';expires='+Day;//expires
 	 
 	 document.cookie = cookies;
 }
//查cookie
function  searchCookie(key){
		 
		 var str = document.cookie;
		 var arr = str.split('; ');
		 
		 var arr1 =[];
		 for(var i=0,len=arr.length;i<len; i++){
			  arr1.push(arr[i].split('='));	     
		 }
		  for(var j=0,len =arr1.length;j<len;j++){
		  	 	 if(key == arr1[j][0]){
		  	 	 	return  arr1[j][1];
		  	 	 	
		  	 	 }
		  	
		  }
	     
	
}

