$(function(){
	$('#login').submit(function (event) {
		event.preventDefault();
		var data = $(this).serialize();
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/Login.php",
			dataType: "json",
			data: data,
			type: "GET",
			crossDomain: true,
			crossDomain : true,
			success: function (page) {
				location.href='./administracion.html';
			},
			error: function (a, statuss, excepcion) {
				alert("El usuario o la contraseña no es correcta, favor de verificar");
				console.log(a);
			}
		});
	});
});