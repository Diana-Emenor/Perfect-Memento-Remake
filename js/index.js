$(function(){
	
	function migrate(event, Name, Type){
		event.preventDefault();
		localStorage.setItem("Tab", Name);
		window.location.href = "./"+ Type +".html";
	}
	
	$("#cirno").click(function(event) {
		migrate(event, "Cirno", "Fairy");
	});
	$("#lily").click(function(event) {
		migrate(event, "LilyWhite", "Fairy");
	});
	$("#lily2").click(function(event) {
		migrate(event, "LilyWhite", "Fairy");
	});
	$("#sunny").click(function(event) {
		migrate(event, "SunnyMilk", "Fairy");
	});
	$("#luna").click(function(event) {
		migrate(event, "LunaChild", "Fairy");
	});
	$("#sapphire").click(function(event) {
		migrate(event, "StarSapphire", "Fairy");
	});
	
	//Yuurei menu
	$("#youmu").click(function(event) {
		migrate(event, "Youmu", "Yuurei");
	});
	$("#lunasa").click(function(event) {
		migrate(event, "Lunasa", "Yuurei");
	});
	$("#merlin").click(function(event) {
		migrate(event, "Merlin", "Yuurei");
	});
	$("#lyrica").click(function(event) {
		migrate(event, "Lyrica", "Yuurei");
	});
	
	//Youkai
	$("#rumia").click(function(event) {
		migrate(event, "Rumia", "Youkai");
	});
	$("#letty").click(function(event) {
		migrate(event, "Letty", "Youkai");
	});
	$("#wriggle").click(function(event) {
		migrate(event, "Wriggle", "Youkai");
	});
	$("#mystia").click(function(event) {
		migrate(event, "Mystia", "Youkai");
	});
	$("#meiling").click(function(event) {
		migrate(event, "Meiling", "Youkai");
	});
	$("#medicine").click(function(event) {
		migrate(event, "Medicine", "Youkai");
	});
	$("#yuuka").click(function(event) {
		migrate(event, "Yuuka", "Youkai");
	});
	$("#yukari").click(function(event) {
		migrate(event, "Yukari", "Youkai");
	});
});