$(function(){
	//Fairies menu
	$("#cirno").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","Cirno");
		window.location.href = "./Fairy.html";
	});
	$("#lily").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","LilyWhite");
		window.location.href = "./Fairy.html";
	});
	$("#lily2").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","LilyWhite");
		window.location.href = "./Fairy.html";
	});
	$("#sunny").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","SunnyMilk");
		window.location.href = "./Fairy.html";
	});
	$("#luna").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","LunaChild");
		window.location.href = "./Fairy.html";
	});
	$("#sapphire").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","StarSapphire");
		window.location.href = "./Fairy.html";
	});
	
	//Yuurei menu
	$("#youmu").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","Youmu");
		window.location.href = "./Yuurei.html";
	});
	$("#lunasa").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","Lunasa");
		window.location.href = "./Yuurei.html";
	});
	$("#merlin").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","Merlin");
		window.location.href = "./Yuurei.html";
	});
	$("#lyrica").click(function(event) {
		event.preventDefault();
		localStorage.setItem("Tab","Lyrica");
		window.location.href = "./Yuurei.html";
	});
});