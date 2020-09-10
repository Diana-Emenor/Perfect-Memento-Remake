$(function(){
	$.ajax({
		url: "https://decomiso-rtm.000webhostapp.com/php/obtenerSesion.php",
		type: "GET",
		headers: {  'Access-Control-Allow-Origin': 'https://decomiso-rtm.000webhostapp.com/',
						"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
		success: function (info, textStatus, xhr) {
			var info2 = JSON.parse(info);
			if(info2['email'] !== 'root@localhost') {
				alert("No es admin, regresando al menú de log in.");
				location.href='./index.html';
			}
		},
		error: function (x, estado, exception) {
			console.log(x);
			//alert("No ha iniciado sesion, " +  + " " + estado + " redireccionando...");
			//location.href='./index.html';
		}
	});
	
	$("#cerrarSesion").click(function() {
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/logout.php",
			type: "GET",
			headers: {  'Access-Control-Allow-Origin': 'https://decomiso-rtm.000webhostapp.com/',
						"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
			success: function () {
				alert("Sesión cerrada correctamente");
				location.href='./index.html';
			},
			error: function (x, estado, exception) {
				console.log(x);
			}
		});
	});
});