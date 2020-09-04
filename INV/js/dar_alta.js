$(function(){
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/obtenerSesion.php",
		type: "GET",
		success: function (info, textStatus, xhr) {
			var info2 = JSON.parse(info);
			if(info2['email'] !== 'root@localhost') {
				alert("No se inició como root, redireccionando...");
				location.href='./index.html';
			}
		},
		error: function (x, estado, exception) {
			alert("No ha iniciado sesion, redireccionando...");
			location.href='./index.html';
		}
	});
	
	$('#alta').submit(function (event) {
        event.preventDefault();
		var data = $(this).serialize();
		$.ajax({
			url: "decomiso-rtm.000webhostapp.com/php/alta.php",
			dataType: "json",
			data: data,
			type: "POST",
			success: function (algo) {
				console.log(algo);
				alert("El usuario ha sido dado de alta exitosamente");
			},
			error: function (x, estado, exception) {
				alert("Hubo un error al dar de alta al usuario");
			}
		});
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