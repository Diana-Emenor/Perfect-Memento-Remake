$(function(){
	$("#empresa").change(function(){
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/obtener-ceves.php",
			dataType: "json",
			data: {
				empresa: $("#empresa").val()
			},
			type: "GET",
			headers: {  'Access-Control-Allow-Origin': 'https://decomiso-rtm.000webhostapp.com/',
						"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
			crossDomain: true,
			success: function (page) {
				console.log(page)
				//obtiene todos los cv de cierta empresa
				$("#ceve").empty();
				for (var i = 0; i < page.length; i++) {
					var o = new Option(page[i], page[i]);
					$(o).html(page[i]);
					$("#ceve").append(o);
				}
				$("#ceve").removeAttr("disabled");
			},
			error: function (a, statuss, excepcion) {
				console.log(a);
			}
		});
	});
	
	$("#ceve").change(function () {
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/obtener-datos-ceve.php",
			dataType: "json",
			headers: {  'Access-Control-Allow-Origin': 'https://decomiso-rtm.000webhostapp.com/',
						"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
			data: {
				ceve: $("#ceve").val()
			},
			type: "GET",
			success: function (page) {
				$("#rutas").empty();
				$("#celulares").empty();
				$("#handhelds").empty();
				
				$("#rutas").val(page[0]);
				$("#celulares").val(page[1]);
				$("#handhelds").val(page[2]);
				
				$("#rutas").removeAttr("disabled");
				$("#celulares").removeAttr("disabled");
				$("#handhelds").removeAttr("disabled");
				$("#submit").removeAttr("disabled");
			},
			error: function (a, statuss, excepcion) {
				console.log(a);
			}
		});
	});
	
	$("#actualizar").submit(function (event) {
		event.preventDefault();
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/actualizar-datos.php",
			dataType: "json",
			headers: {  'Access-Control-Allow-Origin': 'https://decomiso-rtm.000webhostapp.com/',
						"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
			data: {
				empresa: $("#empresa").val(),
				ceve: $("#ceve").val(),
				celulares: $("#celulares").val(),
				rutas: $("#rutas").val(),
				handhelds: $("#handhelds").val()
			},
			type: "POST",
			success: function (page) {
				//actualización completa
				alert("los datos se han actualizado exitosamente");
			},
			error: function (a, statuss, excepcion) {
				console.log(a);
			}
		});
	});
});