$(document).ready(function(){

	//alert("hello ssb! welcome");
$('#sai').click(function(){
	alert("hello ssb! welcome");
});
//hide
$('#hide').click(function(){
	$('.message').hide(2000);

});

$('#show').click(function(){
	$('.message').show(1000);
});

$('#toggle').click(function(){
	$('.message').toggle(1500);
});
$('#fadeout').click(function(){
	$('.message').fadeOut(1000);
});

$('#fadein').click(function(){
	$('.message').fadeIn(1000);
});


$('#fadetoggle').click(function(){
	$('.message').fadeToggle(1000);
});


$('#fadeto').click(function(){
	$('.message').fadeTo(1000,.1);
});

$('.header').click(function(){
	$('.msg').slideToggle(1000);
});


});