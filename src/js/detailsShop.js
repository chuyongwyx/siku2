//引用公共页面头部
$('.quote').load('../../dist/html/public.html  #header',function(){
	$('.lang').hover(function(){
	$('.lang').css('color','#ffb81c');

},function(){
	$('.lang').css('color','#000');
	$('.language').css('display','none');
})
$('.lang').click(function(){
	$('.language').css('display','block');
})

$('.language span').each(function(){
	$(this).hover(function(){
	$(this).css('background','lightgray');
},function(){
	$(this).css('background','#fff');
});
	
});

//登录注册按钮变色
$('.user a').each(function(){
	$(this).hover(function(){
		$(this).css('color','#ffb81c');
	},function(){
		$(this).css('color','#000');
	});
})
$('#login').hover(function(){
	$('#login').css('text-decoration','underline');
},function(){
	$('#login').css('text-decoration','none');
})

$('#register').hover(function(){
	$('#register').css('text-decoration','underline');
},function(){
	$('#register').css('text-decoration','none');
})
/*二级导航栏的ajax动态生成*/
//<div id=""class="list2">
//					 				<div class="kind">
//					 				<h4>分类</h4>
//					 				<dl>
//					 					<dt><a href="">男士包袋</a></dt>
//					 					<dd><a href="">钱包</a></dd>
//					 					<dd><a href="">钱包</a></dd>
//					 					<dd><a href="">钱包</a></dd>
//					 				</dl>
//					 				<dl>
//					 					<dt>女士包袋</dt>
//					 					<dd><a href="">钱包</a></dd>
//					 					<dd><a href="">钱包</a></dd>
//					 					<dd><a href="">钱包</a></dd>
//					 				</dl>
//					 				</div>
//					 				<div class="brand">
//					 					<h4>品牌</h4>
//					 					<dl>
//					 						<dd><a href="">钱包</a></dd>
//					 						<dd><a href="">钱包</a></dd>
//					 						<dd><a href="">钱包</a></dd>
//					 					</dl>
//					 					<dl>
//					 						<dd><a href="">钱包</a></dd>
//					 						<dd><a href="">钱包</a></dd>
//					 						<dd><a href="">钱包</a></dd>
//					 					</dl>
//					 					<dl>
//					 						<dd><a href="">钱包</a></dd>
//					 						<dd><a href="">钱包</a></dd>
//					 						<dd><a href="">钱包</a></dd>
//					 					</dl>
//					 				</div>
//					 				
//					 			</div>
$.get('../json/public.json?t='+new Date().getTime(),function(str){
			//操作str数据
			//console.log(str);
			var arr1 =["主页"];
			var arr2 =["主页"];
			var arr3 =[];
			for(var jsonli in str){
			 	 	arr1.push(jsonli);
					arr2.push(eval(str[jsonli]));
			 }
			
		   
		//取出li遍历li有多少个li
		  for(var i=1,len=$('#list li').length;i<len;i++){
		  		var  box= document.createElement('div');
		  		box.className ='list2';
		  		box.innerHTML='<div class="kind"><h4>分类</h4><dl></dl><dl></dl></div><div class="brand"><h4>品牌</h4><dl></dl><dl></dl><dl></dl></div>';
		  		 $('#list li')[i].appendChild(box);
		  		 
		  		 
		  if(arr1[i]==$('#list li')[i].firstElementChild.innerText){	
		  			
		  		//arr2[i][0]里面是分类中的东西
		  		for(var j =0,len=arr2[i][0].length;j<len;j++){
		  			if(j<Math.ceil(len/2)){
		  				var ds = document.createElement('dd');
		  				ds.innerHTML ='<a href="#">'+arr2[i][0][j]+'</a>';
		  				$('#list li')[i].lastElementChild.firstElementChild.firstElementChild.nextElementSibling.appendChild(ds);
		  			}
		  		if(j>=Math.ceil(len/2)){
		  				var ds2 = document.createElement('dd');
		  				ds2.innerHTML ='<a href="#">'+arr2[i][0][j]+'</a>';
		  				$('#list li')[i].lastElementChild.firstElementChild.lastElementChild.appendChild(ds2);
		  			}
		  		}
		  		//arr2[i][1]里面是品牌的东西
		  		for(var k=0,lens=arr2[i][1].length;k<lens;k++){
		  				if(k<lens&&k>Math.floor(lens/3)*2){
		  					var ds3 = document.createElement('dd');
		  					ds3.innerHTML='<a href="#">'+arr2[i][1][k]+'</a>';
		  					$('#list li')[i].lastElementChild.lastElementChild.lastElementChild.appendChild(ds3);
		  					
		  				}
		  				if(k<=Math.floor(lens/3)*2 && k>Math.floor(lens/3)){
		  					var ds4 = document.createElement('dd');
		  					ds4.innerHTML='<a href="#">'+arr2[i][1][k]+'</a>';
		  			$('#list li')[i].lastElementChild.lastElementChild.lastElementChild.previousElementSibling.appendChild(ds4);		
		  				}
		  				if(k<=Math.floor(lens/3)){
		  					var ds5 = document.createElement('dd');
		  					ds5.innerHTML='<a href="#">'+arr2[i][1][k]+'</a>';
		  					$('#list li')[i].lastElementChild.lastElementChild.firstElementChild.nextElementSibling.appendChild(ds5);
		  				}
		  				
		  			
		  			
		  		}
		  	}
		  		
		  		
		  		
		  }
	
		  
	
		  
		
})




//导航部分
//var list = document.getElementById('list');
	//var lis = list.getElementsByTagName('li');
$('#list li').each(function(){
		$(this).hover(function(){
			
			$(this)[0].firstElementChild.style.color='#fff';
			if($(this)[0].lastElementChild.className=='list2'){
			$(this)[0].firstElementChild.nextElementSibling.style.display='block';
			$(this)[0].lastElementChild.style.display='block';
			}
				
		},function(){
			$(this)[0].firstElementChild.style.color='#ffb81c';
			if($(this)[0].lastElementChild.className=='list2'){
			$(this)[0].lastElementChild.previousElementSibling.style.display='none';
			$(this)[0].lastElementChild.style.display='none';
			}
		})
});

//搜索框
$('.s1').click(function(){
	
	$('#search_span').css('display','none');
	$('#search_box').css('display','block');
	$('#search_box').animate({'width':'200px'},1000);
});
$('.rspan').click(function(){
		$('#search_span').css('display','none');
	$('#search_box').css('display','block');
	$('#search_box').animate({'width':'200px'},1000);
});

$('#search_btn').blur(function(){
	console.log('hahah');
	$('#search_box').animate({'width':'0'},1000,function(){
		$('#search_box').css('display','none');
	$('#search_span').show();
	});
	
});
});

//详情页的操作
$('.small .img').hover(function(){
	$(this).children('.img_bg').css('display','block');
	var index = $(this)[0].id;
	$('.big img')[0].src='../image/detailbig'+index+'.jpg';
	$('#magnifier img')[0].src='../image/detailbig'+index+'.jpg';
	
},function(){
	$(this).children('.img_bg').css('display','none');
})

$('#big').mouseover(function(){
	$('#magnifier').css('display','block');
	$('#mask').css('display','block');
})
$('#big').mouseout(function(){
	$('#magnifier').css('display','none');
	$('#mask').css('display','none');
})

$('.maskbig').mousemove(function(evt){
								var x = evt.offsetX;
								var y = evt.offsetY;
								if(x <= $('#mask')[0].offsetWidth/2){
										x = $('#mask')[0].offsetWidth/2; 
										
								}else if(x >= $('#big')[0].offsetWidth -$('#mask')[0].offsetWidth/2){
										x = $('#big')[0].offsetWidth - $('#mask')[0].offsetWidth/2;
								}
								
								if(y <= $('#mask')[0].offsetHeight/2){
										y = $('#mask')[0].offsetHeight/2;
								}else if(y >= $('#big')[0].offsetHeight - $('#mask')[0].offsetHeight/2){
										y = $('#big')[0].offsetHeight - $('#mask')[0].offsetHeight/2;
								}
								$('#mask')[0].style.left = x - $('#mask')[0].offsetWidth/2 +'px';
								$('#mask')[0].style.top = y -$('#mask')[0].offsetHeight/2 +'px';
								
								var leftx= -$('#mask')[0].offsetLeft*1.25+'px' ;
								var topy = -$('#mask')[0].offsetTop*1.25 +'px';
								
								$('#magnifier img').css('left',leftx);
								$('#magnifier img').css('top',topy);
})

//cookie操作
$('#ejian').click(function(){
	var num =parseInt($('#espan').text());
	var num2 = num-1;
	if(num == 0){
		num2 =0 ;
	}
	$('#espan').text(num2);
})

$('#ejia').click(function(){
	var num = parseInt($('#espan').text());
	var num2 = num+1;
	$('#espan').text(num2);
	
})

//跳转到购物车
$('#detail_car').click(function(){
	$('.body_opac').css('display','block');
	
	//购物车那边需要 shopname  location shopprice  shopnum  
	/*'{"shopname":"'+$('#shopname').text()+'","locas":"'+$('#loca').text()+'","shopprice":"'+$('#price')+'","shopnum":"'+$('#espan')+'"}';*/
	
	createCookie('goodId','{"shopname":"'+$('#shopname').text()+'","locas":"'+$('#loca').text()+'","shopprice":"'+$('#price').text()+'","shopnum":"'+$('#espan').text()+'"}',7)
	
})

//点击隐藏
$('.tits4').click(function(){
	$('.body_opac').css('display','none');
	
})


 


//引用页脚
$('.quote_footer').load('../../dist/html/public.html  #footer',function(){
	$('.server ul li a').hover(function(){
	$(this).css('text-decoration','underline');
},function(){
	$(this).css('text-decoration','none');
});


$('.weibo a').hover(function(){
	$('.weibo_er').css('display','block');
	$('.weibo a').css('text-decoration','underline');
},function(){
	$('.weibo_er').css('display','none');
	$('.weibo a').css('text-decoration','none');
})
$('.weixing a').hover(function(){
	$('.weixing_er').css('display','block');
	$('.weixing a').css('text-decoration','underline');
},function(){
	$('.weixing_er').css('display','none');
	$('.weixing a').css('text-decoration','none');
});

$('.APP .lione').hover(function(){
	$('.APP_er1').css('display','block');
	$('.APP .lione a').css('text-decoration','underline');
},function(){
	$('.APP_er1').css('display','none');
	$('.APP .lione a').css('text-decoration','none');
})

$('.APP .litwo').hover(function(){
	$('.APP_er2').css('display','block');
	$('.APP .litwo a').css('text-decoration','underline');
},function(){
	$('.APP_er2').css('display','none');
	$('.APP .litwo a').css('text-decoration','none');
})

$('.APP .lithree').hover(function(){
	$('.APP_er3').css('display','block');
	$('.APP .lithree a').css('text-decoration','underline');
},function(){
	$('.APP_er3').css('display','none');
	$('.APP .lithree a').css('text-decoration','none');
})


$('.footer_text span a').hover(function(){
	$(this).css('text-decoration','underline');
},function(){
	$(this).css('text-decoration','none');
})
});

