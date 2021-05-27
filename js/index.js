$(function(){
	
	function migrate(event, Name, Type){
		event.preventDefault();
		localStorage.setItem("Tab", Name);
		window.location.href = "./"+ Type +".html";
	}
	
	//Fairy menu
	$("#cirno").click(function(event) {
		migrate(event, "Cirno", "Fairy");
	});
	$("#lily").click(function(event) {
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
	
	//Youkai menu
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
	
	//Magician menu
	$("#alice").click(function(event) {
		migrate(event, "Alice", "Magician");
	});
	$("#patchouli").click(function(event) {
		migrate(event, "Patchouli", "Magician");
	});
	
	//Beast menu
	$("#chen").click(function(event) {
		migrate(event, "Chen", "Beast");
	});
	$("#ran").click(function(event) {
		migrate(event, "Ran", "Beast");
	});
	$("#reisen").click(function(event) {
		migrate(event, "Reisen", "Beast");
	});
	$("#tewi").click(function(event) {
		migrate(event, "Tewi", "Beast");
	});
	
	//Lycaony menu
	$("#keine").click(function(event) {
		migrate(event, "Keine", "Lycaony");
	});
	
	//Vampire menu
	$("#remilia").click(function(event) {
		migrate(event, "Remilia", "Vampire");
	});
	$("#flandre").click(function(event) {
		migrate(event, "Flandre", "Vampire");
	});
	
	//Bourei menu
	$("#yuyuko").click(function(event) {
		migrate(event, "Yuyuko", "Bourei");
	});
	
	//Tengu menu
	$("#aya").click(function(event) {
		migrate(event, "Aya", "Tengu");
	});
	
	//Oni menu
	$("#suika").click(function(event) {
		migrate(event, "Suika", "Oni");
	});
	
	//Other menu
	$("#dragon").click(function(event) {
		migrate(event, "Dragon", "Other");
	});
	$("#kappa").click(function(event) {
		migrate(event, "Kappa", "Other");
	});
	$("#celestial").click(function(event) {
		migrate(event, "Celestials", "Other");
	});
	$("#yaoyorozu").click(function(event) {
		migrate(event, "Yaoyorozu", "Other");
	});
	$("#divine_spirit").click(function(event) {
		migrate(event, "Divine_Spirit", "Other");
	});
	
	//Shinigami menu
	$("#komachi").click(function(event) {
		migrate(event, "Komachi", "Shinigami");
	});
	
	//Yama menu
	$("#eiki").click(function(event) {
		migrate(event, "Eiki", "Yama");
	});
	
	//Legends menu
	$("#reimu").click(function(event) {
		migrate(event, "Reimu", "Legends");
	});
	$("#marisa").click(function(event) {
		migrate(event, "Marisa", "Legends");
	});
	$("#sakuya").click(function(event) {
		migrate(event, "Sakuya", "Legends");
	});
	$("#rinnosuke").click(function(event) {
		migrate(event, "Rinnosuke", "Legends");
	});
	$("#eirin").click(function(event) {
		migrate(event, "Eirin", "Legends");
	});
	$("#kaguya").click(function(event) {
		migrate(event, "Kaguya", "Legends");
	});
	$("#mokou").click(function(event) {
		migrate(event, "Mokou", "Legends");
	});
	
	//Area menu
	$("#village").click(function(event) {
		migrate(event, "Village", "Area");
	});
	$("#shrine").click(function(event) {
		migrate(event, "Shrine", "Area");
	});
	$("#store").click(function(event) {
		migrate(event, "Store", "Area");
	});
	$("#lake").click(function(event) {
		migrate(event, "Lake", "Area");
	});
	$("#bamboo").click(function(event) {
		migrate(event, "Bamboo", "Area");
	});
	$("#forest").click(function(event) {
		migrate(event, "Forest", "Area");
	});
	$("#mountain").click(function(event) {
		migrate(event, "Mountain", "Area");
	});
	$("#road").click(function(event) {
		migrate(event, "Road", "Area");
	});
	$("#river").click(function(event) {
		migrate(event, "River", "Area");
	});
	$("#garden").click(function(event) {
		migrate(event, "Garden", "Area");
	});
	$("#pond").click(function(event) {
		migrate(event, "Pond", "Area");
	});
	$("#hill").click(function(event) {
		migrate(event, "Hill", "Area");
	});
	$("#mansion").click(function(event) {
		migrate(event, "Mansion", "Area");
	});
	$("#netherworld").click(function(event) {
		migrate(event, "Netherworld", "Area");
	});
	$("#hakugyokurou").click(function(event) {
		migrate(event, "Hakugyokurou", "Area");
	});
	$("#eientei").click(function(event) {
		migrate(event, "Eientei", "Area");
	});
	$("#moon").click(function(event) {
		migrate(event, "Moon", "Area");
	});
	$("#reconsideration").click(function(event) {
		migrate(event, "Reconsideration", "Area");
	});
	$("#muenzuka").click(function(event) {
		migrate(event, "Muenzuka", "Area");
	});
	$("#higan").click(function(event) {
		migrate(event, "Higan", "Area");
	});
	
	//summary table
	$("#lily2").click(function(event) {
		migrate(event, "LilyWhite", "Fairy");
	});
	$("#cirno2").click(function(event) {
		migrate(event, "Cirno", "Fairy");
	});
	$("#sunny2").click(function(event) {
		migrate(event, "SunnyMilk", "Fairy");
	});
	$("#luna2").click(function(event) {
		migrate(event, "LunaChild", "Fairy");
	});
	$("#sapphire2").click(function(event) {
		migrate(event, "StarSapphire", "Fairy");
	});
	$("#youmu2").click(function(event) {
		migrate(event, "Youmu", "Yuurei");
	});
	$("#lunasa2").click(function(event) {
		migrate(event, "Lunasa", "Yuurei");
	});
	$("#merlin2").click(function(event) {
		migrate(event, "Merlin", "Yuurei");
	});
	$("#lyrica2").click(function(event) {
		migrate(event, "Lyrica", "Yuurei");
	});
	$("#rumia2").click(function(event) {
		migrate(event, "Rumia", "Youkai");
	});
	$("#letty2").click(function(event) {
		migrate(event, "Letty", "Youkai");
	});
	$("#wriggle2").click(function(event) {
		migrate(event, "Wriggle", "Youkai");
	});
	$("#mystia2").click(function(event) {
		migrate(event, "Mystia", "Youkai");
	});
	$("#meiling2").click(function(event) {
		migrate(event, "Meiling", "Youkai");
	});
	$("#medicine2").click(function(event) {
		migrate(event, "Medicine", "Youkai");
	});
	$("#yuuka2").click(function(event) {
		migrate(event, "Yuuka", "Youkai");
	});
	$("#yukari2").click(function(event) {
		migrate(event, "Yukari", "Youkai");
	});
	$("#alice2").click(function(event) {
		migrate(event, "Alice", "Magician");
	});
	$("#patchouli2").click(function(event) {
		migrate(event, "Patchouli", "Magician");
	});
	$("#chen2").click(function(event) {
		migrate(event, "Chen", "Beast");
	});
	$("#ran2").click(function(event) {
		migrate(event, "Ran", "Beast");
	});
	$("#reisen2").click(function(event) {
		migrate(event, "Reisen", "Beast");
	});
	$("#tewi2").click(function(event) {
		migrate(event, "Tewi", "Beast");
	});
	$("#keine2").click(function(event) {
		migrate(event, "Keine", "Lycaony");
	});
	$("#remilia2").click(function(event) {
		migrate(event, "Remilia", "Vampire");
	});
	$("#flandre2").click(function(event) {
		migrate(event, "Flandre", "Vampire");
	});
	$("#yuyuko2").click(function(event) {
		migrate(event, "Yuyuko", "Bourei");
	});
	$("#aya2").click(function(event) {
		migrate(event, "Aya", "Tengu");
	});
	$("#suika2").click(function(event) {
		migrate(event, "Suika", "Oni");
	});
	$("#komachi2").click(function(event) {
		migrate(event, "Komachi", "Shinigami");
	});
	$("#eiki2").click(function(event) {
		migrate(event, "Eiki", "Yama");
	});
});