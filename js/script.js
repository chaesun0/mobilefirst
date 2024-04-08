$(document).ready(function(){
	/* var imgs;
	var img_count;
	var img_position=1;
	
	imgs=$('.product-box');
	img_count=imgs.length;
	currentIndex=0;	
	
	$('.prev').click(function(){
		back();
	});
	$('.next').click(function(){
		next();
	});	
	
	function back(){
		if(0<currentIndex){
			imgs.animate({left:'+=1490px'},600);
			currentIndex--;
		}	
	}
	function next(){
		if(img_count-10>currentIndex){
			imgs.animate({left:'-=1490px'},600);
			currentIndex++;
		}
	} */
	
	$(window).resize(function(){
		location.reload();
	});
	var moving=$('.product-slide');
		var slideListWidth=$('.product-slide ul .product-box').width();
		function left(){
			moving.find('ul').stop().animate({left:-slideListWidth},500, function(){
				$(this).children('li:first').insertAfter($(this).children("li:last"));
				$(this).css({left:0});
			});
		}
		function right(){
			moving.find('ul li:last').insertBefore(moving.find('ul li:first'));
			moving.find('ul').css({left:-slideListWidth}).stop().animate({left:0},500);
		}
		
		$('.prev').click(function(){
			right();
			return false;
		});
		$('.next').click(function(){
			left();
			return false;
		});
		 var slide=$('.product-slide ul');
		var slideWidth=slide.width();
		var slideList=$('.product-slide ul .product-box');
		var slideListWidth=$('.product-slide ul .product-box').width(); 
		var current=0;
		var setIntervalId;
		
		mainSlide();
		function mainSlide(){
			setIntervalId=setInterval(function(){
				slide.stop().animate({left:-slideListWidth},500,function(){
					$('.product-slide ul>li:first').insertAfter('.product-slide ul>li:last');
					slide.css({left:0});
				});
			},2000);
		} 
		
		$('.product-slide ul, .prev, .next').hover(function(){
			clearInterval(setIntervalId);
		},function(){
			mainSlide();
		});
	$(window).resize(function(){
		var moving=$('.product-slide');
		var slideListWidth=$('.product-slide ul .product-box').width();
		function left(){
			moving.find('ul').stop().animate({left:-slideListWidth},500, function(){
				$(this).children('li:first').insertAfter($(this).children("li:last"));
				$(this).css({left:0});
			});
		}
		function right(){
			moving.find('ul li:last').insertBefore(moving.find('ul li:first'));
			moving.find('ul').css({left:-slideListWidth}).stop().animate({left:0},500);
		}
		
		$('.prev').click(function(){
			right();
			return false;
		});
		$('.next').click(function(){
			left();
			return false;
		});
		 var slide=$('.product-slide ul');
		var slideWidth=slide.width();
		var slideList=$('.product-slide ul .product-box');
		var slideListWidth=$('.product-slide ul .product-box').width(); 
		var current=0;
		var setIntervalId;
		
		mainSlide();
		function mainSlide(){
			setIntervalId=setInterval(function(){
				slide.stop().animate({left:-slideListWidth},500,function(){
					$('.product-slide ul>li:first').insertAfter('.product-slide ul>li:last');
					slide.css({left:0});
				});
			},2000);
		} 
		
		$('.product-slide ul, .prev, .next').hover(function(){
			clearInterval(setIntervalId);
		},function(){
			mainSlide();
		});
	});
	bb=true;
	$('.icon-menu').click(function(){
		if(bb){
			$('.nav-toggle').stop().animate({'left':'0px'},250,			
			function(){
				bb=false;
			});
			$(this).addClass('icon-cancle');
			$(this).removeClass('icon-menu');
			$('.nav-toggle+.active').addClass('bg');
			$('.nav-toggle').css('box-shadow','9px 0px 5px -4px rgba(0,0,0,0.48)')
		}else{
			$(this).removeClass('icon-cancle');
			$(this).addClass('icon-menu');
			$('.nav-toggle').stop().animate({'left':'-280px'},250,
			function(){
				bb=true;
			});
			$('.nav-toggle+.active').removeClass('bg');
			$('.nav-toggle').css('box-shadow','none')
		}
	});	
});











