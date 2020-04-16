$(function(){
	var tab = localStorage.getItem("Tab");
	
	if(tab !== "Main"){
		$('.nav-tabs a[href="#' + localStorage.getItem("Tab") + '"]').tab('show');
		localStorage.setItem("Tab","Main");
	}
	
	$('[data-toggle="tooltip"]').tooltip();
});