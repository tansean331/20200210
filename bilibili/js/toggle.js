$("#plus").click(function(){
	
	$('#menu').css("display","unset");
	$("#menu").css("width","75%");
	$("#menu-bg").fadeIn(200);
	
})
$("#menu-bg").click(function(){

	$("#menu").animate({width:"0%"});
	$('#menu').css("display","none");
	$("#menu-bg").fadeOut(200);
})

$(".menus-home img").click(function(){
 	// 内容的展示隐藏
	// 箭头图片切换
    $('.menus-home img').attr('src','../image/home1.svg');
	$('.menus-pingdao img').attr('src','../image/pindao.svg');
	$('.menus-dongtai img').attr('src','../image/dongtai.svg');
	$('.menus-shop img').attr('src','../image/shop.svg');
	$(".menus-home span").css("color","#ff6e9c");
	$(".menus-pingdao span").css("color","#707070");
	$(".menus-dongtai span").css("color","#707070");
	$(".menus-shop span").css("color","#707070");
  
})

$(".menus-pingdao img").click(function(){
 	// 内容的展示隐藏
	// 箭头图片切换
  $('.menus-home img').attr('src','../image/home.svg');
  $('.menus-pingdao img').attr('src','../image/pindao1.svg');
  $(".menus-home span").css("color","#ff6e9c");
  $('.menus-dongtai img').attr('src','../image/dongtai.svg');
  $('.menus-shop img').attr('src','../image/shop.svg');
  $(".menus-home span").css("color","#707070");
  $(".menus-pingdao span").css("color","#ff6e9c");
  $(".menus-dongtai span").css("color","#707070");
  $(".menus-shop span").css("color","#707070");
})


$(".menus-dongtai img").click(function(){
 	// 内容的展示隐藏
	// 箭头图片切换
  $('.menus-home img').attr('src','../image/home.svg');
  $('.menus-pingdao img').attr('src','../image/pindao.svg');
  $('.menus-dongtai img').attr('src','../image/dongtai1.svg');
  $(".menus-dongtai span").css("color","#ff6e9c");
  $('.menus-shop img').attr('src','../image/shop.svg');
  $(".menus-home span").css("color","#707070");
  $(".menus-pingdao span").css("color","#707070");
  $(".menus-dongtai span").css("color","#ff6e9c");
  $(".menus-shop span").css("color","#707070");
})

$(".menus-shop img").click(function(){
 	// 内容的展示隐藏
	// 箭头图片切换
  $('.menus-home img').attr('src','../image/home.svg');
  $('.menus-pingdao img').attr('src','../image/pindao.svg');
  $('.menus-dongtai img').attr('src','../image/dongtai.svg');
  $('.menus-shop img').attr('src','../image/shop1.svg');
  $(".menus-shop span").css("color","#ff6e9c");
  $(".menus-home span").css("color","#707070");
  $(".menus-pingdao span").css("color","#707070");
  $(".menus-dongtai span").css("color","#707070");
  $(".menus-shop span").css("color","#ff6e9c");
})

