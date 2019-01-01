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


//列表页的json获取
(function(){
	var arr =[];
	var arr2 =[];
$.get('../../dist/json/bagPouch.json?t='+new Date().getTime(),function(str){
	
	 for(var kinds in str){
	 	 arr.push(kinds);
	 	var ds= str[kinds].split(',');
	 	arr2.push(ds);
	 }

		var index = 0;
		$('.list_content dt').each(function(){
			index++;
			$(this).text(''+arr[index]+':');
		});
		var  index2 = 0;
		$('.list_content dd').each(function(){
			index2++;
			for(var i=0,len=arr2[index2].length;i<len;i++){
				$(this).append('<a href="javascript:;" title='+arr2[index2][i]+'>'+arr2[index2][i]+'</a>');
			}
			
		})
		
		for(var j=0,lens=arr2[0].length;j<lens;j++){
			$('#list_shop').append('<a href="listBag.html">'+arr2[0][j]+'</a>');
		}
		
		$('#list_shop a').hover(function(){
			
		$(this).css('color','black').css('textDecoration','underline');
		},function(){
		$(this).css('color','black').css('color','#666').css('textDecoration','');	
		});
		//动态创建后的a中js交互
		$('#list_content a').hover(function(){
			$(this).css('color','red');
			
		},function(){
			$(this).css('color','#666');
		})
		//选择添加
		//解决异步问题
		$('#list_content dd a').click(function(){
			var that = $(this);
			new Promise(function(resolve,reject){
			var shop_dd =that.text();
			var shop_dt =that.parent().parent().prev().text();
			//console.log(shop_dd);
			that.parent().parent().parent().remove();
			var ems= $('#select_a').append('<a href="javascript:;">'+shop_dt+shop_dd+'<em>x</em></a>');
			$('.select_kind').css('display','block');
			resolve(ems);
			
			}).then($('#select_a a em').click(function(){
				$(this).parent().remove();
				
			}))
		})
		
		//多选问题
		$('.moresel').click(function(){
			var dda_text ="";
			var ddt_text="";
			$('#list_content dd a').off('click');
			$('#list_content dd a').on('click',function(){
				$(this).css('lineHeight','24px');
				$(this).css('marginTop','10px');
				$(this).css('border','1px solid #666');
				var str = $(this).text();
				dda_text+=str+'、';
				 ddt_text =$(this).parent().parent().prev().text();
				return false;
				
			})
			var  that = $(this);
			new Promise(function(resolve,reject){
			that.parent().prev().css('height','200px');
			//$(this).parent().prev().css('overflow','scroll');
			var btn = that.parent().prev().append('<div id="btn"><button class="btn_ok">确定</button><button class="btn_down">取消</button></div>');
			that.parent().css('display','none');
			
			
			resolve(btn);
			}).then(
				new Promise(function(resolve,reject){
				$('.btn_ok').click(function(){
				$('#select_a').append('<a href="javascript:;">'+ddt_text+dda_text+'<em>x</em></a>');
				$('.select_kind').css('display','block');
				$('.btn_ok').parent().parent().parent().parent().remove();
				$('#select_a a em').click(function(){
				$(this).parent().remove();
				
			})
				$('#list_content dd a').on('click',function(){
					//多选和单选问题
						var that = $(this);
						new Promise(function(resolve,reject){
						var shop_dd =that.text();
						var shop_dt =that.parent().parent().prev().text();
						//console.log(shop_dd);
						that.parent().parent().parent().remove();
						var ems= $('#select_a').append('<a href="javascript:;">'+shop_dt+shop_dd+'<em>x</em></a>');
						$('.select_kind').css('display','block');
						resolve(ems);
						
						}).then($('#select_a a em').click(function(){
							$(this).parent().remove();
							
						}))
						return false;
					
				})
				
				
			})}).then()
				);
		
					
		
		});
		
		
		
		//更多的问题
		//点击更多按钮把隐藏的部分显示出来
		
		
		
})
//js列表栏功能动画
 $('#tit_all').hover(function(){
 	$('#tit_all').css('color','red');
 },function(){
 	$('#tit_all').css('color','#666');
 })
$('.list_i2').hover(function(){
	$('.list_i2 a').css('color','red');
	$('.list_i2').css('background','#fff');
	$('.list_i2 i').html('&#xe504;');
	$('#list_shop').css('display','block');
	$('#list_shop a').css('color','#666');
},function(){
	$('.list_i2 a').css('color','#666');
	$('.list_i2').css('background','');
	$('.list_i2 i').html('&#xe509;');
	$('#list_shop').css('display','none');
	$('#list_shop a').css('color','');
	
})


})()



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

