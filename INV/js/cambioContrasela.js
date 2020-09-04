$(function(){
	$.ajax({
		url: "https://decomiso-rtm.000webhostapp.com/php/obtenerSesion.php",
		type: "GET",
		success: function (info, textStatus, xhr) {
			console.log(info);
			var info2 = JSON.parse(info);
			if(info2['email'] != 'root@localhost') {
				alert("No se inició como root, redireccionando...");
				location.href='./index.html';
			}
		},
		error: function (x, estado, exception) {
			alert("No ha iniciado sesion, redireccionando...");
			location.href='./index.html';
		}
	});
	
	$('#cambioContraseña').submit(function (event) {
        event.preventDefault();
        if ($("#pwd1").val() !== $("#pwd2").val()) {
            alert("La contraseña no coincide");
        } else {
            var data = $(this).serialize();
            $.ajax({
				url: "https://decomiso-rtm.000webhostapp.com/php/contra.php",
				dataType: "json",
				data: data,
				type: "POST",
				success: function (algo) {
					alert("la contraseña se actualizó adecuadamente");
				},
				error: function (a, statuss, excepcion) {
					console.log(a);
					alert("la contraseña no se pudo actualizar");
				}
			});
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