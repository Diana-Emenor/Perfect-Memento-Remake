$(function(){
	$.ajax({
		url: "https://decomiso-rtm.000webhostapp.com/php/obtenerSesion.php",
		type: "GET",
		success: function (info, textStatus, xhr) {
			var info2 = JSON.parse(info);
			$("#saludo").empty();
			$("#saludo").append('Saludo, has iniciado sesión como ' + info2['email']);
			if(info2['email'] == 'root@localhost') {
				$("#admin").removeAttr("hidden");
			}
		},
		error: function (x, estado, exception) {
			alert("No ha iniciado sesion, redireccionando...");
			location.href='./index.html';
		}
	});
	
	$("#cerrarSesion").click(function() {
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/logout.php",
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
