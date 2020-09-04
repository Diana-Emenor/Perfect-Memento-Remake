$(function(){
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/obtenerSesion.php",
		type: "GET",
		success: function (info, textStatus, xhr) {
			var info2 = JSON.parse(info);
			if(info2['email'] !== 'root@localhost') {
				alert("No es admin, regresando al menú de log in.");
				location.href='./index.html';
			}
		},
		error: function (x, estado, exception) {
			console.log(x);
			alert("No ha iniciado sesion, " +  + " " + estado + " redireccionando...");
			location.href='./index.html';
		}
	});
	
	$("#cerrarSesion").click(function() {
		$.ajax({
			url: "decomiso-rtm.000webhostapp.com/php/logout.php",
			type: "GET",
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