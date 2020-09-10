$(function(){
	$.ajax({
		url: "https://decomiso-rtm.000webhostapp.com/php/Receive-Inv.php",
		dataType: "json",
		headers: {  'Access-Control-Allow-Origin': 'https://decomiso-rtm.000webhostapp.com/',
						"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"},
		type: "GET",
		success: function (page) {
			console.log(page);
			for (var i = 0; i < page.length; i++) {
				var actual = parseInt(page[i]['ACTUAL']);
				var expectativa = parseInt(page[i]['EXPECTATIVA']);
				$("#contenido").append('<tr><td>' + 
				page[i]['SERIEID'] + '</td><td>' + 
				page[i]['TIPO']  + '</td><td>' + 
				page[i]['MARCA']  + '</td><td>' +
				page[i]['MODELO']  + '</td><td>' +
				page[i]['EMPRESA']  + '</td><td>' +
				page[i]['BODEGA']  + '</td><td>' +
				page[i]['ENTREGA']  + '</td><td>'+
				actual + ' ( faltan: ' + (expectativa - actual)  + ')</td><td>' +
				page[i]['ESTADO']+ '</td></tr>');
			}
		},
		error: function (a, statuss, excepcion) {
			location.href='./index.html';
		}
	});
});