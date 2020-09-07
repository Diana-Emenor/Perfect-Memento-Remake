$(function(){
	$('#login').submit(function (event) {
		event.preventDefault();
		var data = $(this).serialize();
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/Login.php",
			headers: {  'Access-Control-Allow-Origin': 'https://decomiso-rtm.000webhostapp.com/',
						"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
			dataType: "json",
			data: data,
			type: "GET",
			crossDomain: true,
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
