$(function(){
	var fecha = new Date();
	var mes = fecha.getMonth()+1;
	var dia = fecha.getDate();
	var dias = ["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
	var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
	$("#fecha").append("La fecha de hoy es: " + dias[fecha.getDay()] + ", " + (dia < 10 ? '0' : '') + dia + " de " + meses[mes - 1] + " del " + fecha.getFullYear() + "<br><strong>" + (dia < 10 ? '0' : '') + dia + '/' + (mes < 10 ? '0' : '') + mes + '/' + fecha.getFullYear() + "</strong>");
	
	$("#loader").css("display", "block");
	$('#myModal').modal('toggle');
	
	var tabla = $("#reporte").DataTable({
		scrollX: true,
		scrollY: "400px",
		scrollCollapse: true,
		columnDefs: [
			{"className": "dt-center", "targets": "_all"}
		],
		language: {
			"search": "Buscar Centros de Venta:"
		},
		columns: [
			null,
			null,
			{ "searchable": false },
			null,
			{ "searchable": false },
			{ "searchable": false },
			{ "searchable": false },
			{ "searchable": false },
			{ "searchable": false }
		],
	});
	
	$.ajax({
		url: "https://decomiso-rtm.000webhostapp.com/php/Obtener-reporte-BIMBO.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			var totalCelulares = 0;
			var totalHandHelds = 0;
			for (var i = 0; i < page.length; i++) {
				totalCelulares+=page[i][2];
				totalHandHelds+=page[i][6];
				tabla.row.add(page[i]);
				var cv = tabla.cell(i, 1).node();
				$(cv).css("font-size", "11px");
				if(page[i][2] > 0 && page[i][6] == 0) {
					var cell = tabla.cell(i, 6).node();
					$(cell).css("background-color", "red");
				}
			}
			$("#hhtotal").append(new Intl.NumberFormat("en-us").format(totalHandHelds));
			var diferencia = (totalHandHelds / totalCelulares) * 100;
			$(tabla.table().footer()).empty();
			$(tabla.table().footer()).append("<tr><td>-</td><td>-</td><td>Total: " + new Intl.NumberFormat("en-us").format(totalCelulares) +"</td><td>-</td><td>-</td><td>Total: " + new Intl.NumberFormat("en-us").format(totalHandHelds) +"</td><td></td><td></td><td>diferencia: %" + diferencia.toFixed(2) +"</td></tr>");
			$("#diferencia").append("Progreso del recibimiento de Handhelds: <strong>%" + diferencia.toFixed(2) + "</strong>");
			tabla.draw();
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	$.ajax({
		url: "https://decomiso-rtm.000webhostapp.com/php/reporte-BIMBO.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			$("#CelEnv").append("Con el 10% de stock: <br><strong>" + new Intl.NumberFormat("en-us").format(page[0]) + "</strong>");
			$("#CelStock").append("Enviados a Cebes: <br><strong>" + new Intl.NumberFormat("en-us").format(page[1].toFixed(0)) + "</strong>");
			$("#HHRecibidas").append("Hand Helds recibidas: <br><strong>" + new Intl.NumberFormat("en-us").format(page[2]) + "</strong>");
			$("#HHPendientes").append("Hand Helds pendientes: <br><strong>" + new Intl.NumberFormat("en-us").format(page[3].toFixed(0)) + "</strong>");
			$("#bajasSolicitadas").append("Bajas solicitadas: <br><strong>" + new Intl.NumberFormat("en-us").format(page[4]) + "</strong>");
			$("#bajasNTT").append("Bajas en NTT: <br><strong>" + new Intl.NumberFormat("en-us").format(page[5]) + "</strong>");
			$("#Remorzado").append("Hand Helds, en estado de remorzado: <br><strong>" + new Intl.NumberFormat("en-us").format(page[6]) + "</strong>");
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	$.ajax({
		url: "https://decomiso-rtm.000webhostapp.com/php/Obtener-resumen-BIMBO.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			$("#real").append("Real: " + new Intl.NumberFormat("en-us").format(page[0]));
			if(page[1] > 0) {
				$("#esperando").append("Esperando: " + new Intl.NumberFormat("en-us").format(page[1].toFixed(0)));
			} else {
				$("#esperando").append("Esperando: 0");
			}
			for(var i = 0; i < page[2].length; i++) {
				if(page[2][i] > 0) {
					switch(i){
						case 0:
						$("#1").removeAttr("disabled");
						break;
						case 1:
						$("#2").removeAttr("disabled");
						break;
						case 2:
						$("#3").removeAttr("disabled");
						break;
						case 3:
						$("#4").removeAttr("disabled");
						break;
						case 4:
						$("#5").removeAttr("disabled");
						break;
						case 5:
						$("#6").removeAttr("disabled");
						break;
						case 6:
						$("#7").removeAttr("disabled");
						break;
						case 7:
						$("#8").removeAttr("disabled");
						break;
						case 8:
						$("#9").removeAttr("disabled");
						break;
						case 9:
						$("#10").removeAttr("disabled");
						break;
						case 10:
						$("#11").removeAttr("disabled");
						break;
						case 11:
						$("#12").removeAttr("disabled");
						break;
						case 12:
						$("#13").removeAttr("disabled");
						break;
						case 13:
						$("#14").removeAttr("disabled");
						break;
						case 14:
						$("#15").removeAttr("disabled");
						break;
						case 15:
						$("#16").removeAttr("disabled");
						break;
						case 16:
						$("#17").removeAttr("disabled");
						break;
						default:
						break;
					}
					
				}
			}
			$("#loader").css("display", "none");
			$('#myModal').modal('toggle');
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	
	$("#1").click(function() {
		tabla.columns(3).search("^01$", true, false, false).draw();
	});
	$("#2").click(function() {
		tabla.columns(3).search("01.5").draw();
	});
	$("#3").click(function() {
		tabla.columns(3).search("02").draw();
	});
	$("#4").click(function() {
		tabla.columns(3).search("03").draw();
	});
	$("#5").click(function() {
		tabla.columns(3).search("04").draw();
	});
	$("#6").click(function() {
		tabla.columns(3).search("05").draw();
	});
	$("#7").click(function() {
		tabla.columns(3).search("06").draw();
	});
	$("#8").click(function() {
		tabla.columns(3).search("07").draw();
	});
	$("#9").click(function() {
		tabla.columns(3).search("08").draw();
	});
	$("#10").click(function() {
		tabla.columns(3).search("09").draw();
	});
	$("#11").click(function() {
		tabla.columns(3).search("10").draw();
	});
	$("#12").click(function() {
		tabla.columns(3).search("11").draw();
	});
	$("#13").click(function() {
		tabla.columns(3).search("12").draw();
	});
	$("#14").click(function() {
		tabla.columns(3).search("13").draw();
	});
	$("#15").click(function() {
		tabla.columns(3).search("PILOTO").draw();
	});
	$("#16").click(function() {
		tabla.columns(3).search("TBC").draw();
	});
	$("#17").click(function() {
		tabla.columns(3).search("TMM").draw();
	});
	
	$("#exportarExcel").click(function() {
		var registros = tabla.rows().nodes();
		var str = '<table><tr><td>Codigo de CeVe</td><td>Centro de Venta</td><td>Celulares enviados</td><td>Sprint</td><td>Bajas</td><td>Hand Held por Ruta</td><td>Hand Held Recibidos</td><td>Diferencia de HandHeld</td><td>Diferencia de Celular</td></tr><tr>';
		for (var i = 0; i < registros.length; i++) {
			str+=registros[i].innerHTML.toString() + '</tr><tr>';
		}
		str+= '</tr></table>';
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/exportarExcel.php",
			dataType: "text",
			data: {
				data: str
			},
			type: "POST",
			success: function (file) {
				$.fileDownload('./' + file)
					.done(function () {
						alert('File download a success!');
					})
					.fail(function () {
						alert('File download failed!');
					});
			},
			error: function (x, estado, exception) {
				console.log(x);
			}
		});
	});
});