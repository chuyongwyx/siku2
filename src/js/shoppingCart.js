//var str = searchCookie('goodId');

//var str2 =eval('('+str+')');

/*<tr><td><input type='checkbox' /></td><td><img src='../../src/image/detail1.jpg' alt='' /><span>肯德基挥洒的快乐撒娇哈迪斯卡了第三</span></td><td>欧洲</td><td>￥3178</td><td class='tdbtn'><button>-</button><span class='spannum'>1</span><button>+</button></td><td class='tdmoney'>￥12712元</td><td>删除</td></tr>*/

if(searchCookie('goodId')){
	
	$('.shop_carform').css('display','block');
  	$('.cart').css('display','none');
	var str = searchCookie('goodId');
	var str2 =eval('('+str+')');
	
	$('#shopname').text(str2["shoppname"]);
	$('#locas').text(str2["locas"]);
	$('#shopprice').text(str2["shopprice"]);
	$('.spannum').text(str2["shopnum"]);
	$('.tdmoney').text(parseInt(str2["shopprice"])*parseInt(str2["shopnum"]));
	
	$('#num1').text(str2["shopnum"]);
	$('#num2').text(str2["shopnum"]);
	$('#count').text(parseInt(str2["shopprice"])*parseInt(str2["shopnum"]));
	
			
		$('#jian').click(function(){
		
	    var num1 = $('.spannum').text();
	    
	    var num2 = num1-1;
	    if(num1 ==1){
	    	num2=1;
	    }
	   var num3 = num2*parseInt($('#shopprice').text());
	  
	    $('.tdmoney').text(num3);
	    $('.spannum').text(num2);
	    $('#num1').text(num2);
	    $('#num2').text(num2);
	    $('#count').text(num2*num3);
	})
		
		$('#jia').click(function(){
		
	    var num1 = $('.spannum').text();
	    
	    var num2 = parseInt(num1)+1;
	   
	   var num3 = num2*parseInt($('#shopprice').text());
	  
	    $('.tdmoney').text(num3);
	    $('.spannum').text(num2);
	    $('#num1').text(num2);
	    $('#num2').text(num2);
	    $('#count').text(num3);
	})
	
	$('#delt').click(function(){
		confirm('确定删除');
		 var goodId =searchCookie('goodId');
		document.cookie='goodId='+goodId+''+';path=/'+";expires=" + new Date(0);
		window.location='../../dist/html/shoppingCart.html';
	})
}

//轮播图
$('.carousel_bott .carous_i').hover(function(){
	
	$('.carousel_bott .carous_i').css('color','lightgray');
},function(){
	$('.carousel_bott .carous_i').css('color','black');
})

$('.carousel_bott .carous_i2').hover(function(){
	
	$('.carousel_bott .carous_i2').css('color','lightgray');
},function(){
	$('.carousel_bott .carous_i2').css('color','black');
})



$('.carousel_bott .carous_i2').click(function(){
		var leave = $('.carousel_img')[0].offsetLeft;
		var move =  -1210+leave; 
	
		if(move<-3630){
			
			$('.carousel_img')[0].style.marginLeft='0';
			$('.carousel_img').animate({'marginLeft':-1210});
			
		}else{
			$('.carousel_img').animate({'marginLeft':move});
		}
	
	
})

$('.carousel_bott .carous_i').click(function(){
		
		var leave = $('.carousel_img')[0].offsetLeft;
		var move2 =  1210+leave; 
		if(move2>0){
			$('.carousel_img')[0].style.marginLeft='-3630px';
			$('.carousel_img').animate({'marginLeft':-2420});
		}else{
			$('.carousel_img').animate({'marginLeft':move2});
		}
	
	
})
