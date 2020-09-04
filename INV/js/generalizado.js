$(function(){
	//$("#loader").css("display", "block");
	//$('#myModal').modal('toggle');
	var fecha = new Date();
	var mes = fecha.getMonth()+1;
	var dia = fecha.getDate();
	$("#fecha").append("El dia de hoy es: " + (dia < 10 ? '0' : '') + dia + '/' + (mes < 10 ? '0' : '') + mes + '/' + fecha.getFullYear());
	
	var databarcel;
	var databimbo;
	var dataricolino;
	
	var celularescon=0;
	var celularessin=0;
	var handheldsbod=0;
	var handheldspen=0;
	var bajassolicitadas=0;
	var bajasadministracion=0;
	var remorzadas=0;
	
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/reporte-BARCEL.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			$("#CelTotalBarcel").append("<strong>" + new Intl.NumberFormat("en-us").format(page[0]) + "</strong>");
			$("#CelStockBarcel").append("<strong>" + new Intl.NumberFormat("en-us").format(page[1].toFixed(0)) + "</strong>");
			$("#HHRecibidasBarcel").append("<strong>" + new Intl.NumberFormat("en-us").format(page[2]) + "</strong>");
			$("#HHDecomisoBarcel").append("<strong>" + new Intl.NumberFormat("en-us").format(page[3].toFixed(0)) + "</strong>");
			$("#BajasSoliBarcel").append("<strong>" + new Intl.NumberFormat("en-us").format(page[4]) + "</strong>");
			$("#BajasNTTBarcel").append("<strong>" + new Intl.NumberFormat("en-us").format(page[5]) + "</strong>");
			$("#RemorzadasBarcel").append("<strong>" + new Intl.NumberFormat("en-us").format(page[6]) + "</strong>");
			console.log(page[2]);
			celularescon += Number(page[0]);
			celularessin += Number(page[1]);
			handheldsbod += Number(page[2]);
			handheldspen += Number(page[3]);
			bajassolicitadas += Number(page[4]);
			bajasadministracion += Number(page[5]);
			remorzadas += Number(page[6]);
			
			$("#CelTotalSumatoria").empty();
			$("#CelStockTotal").empty();
			$("#HHRecibidasTotal").empty();
			$("#HHDecomisoTotal").empty();
			$("#BajasSoliTotal").empty();
			$("#BajasNTTTotal").empty();
			$("#RemorzadasTotal").empty();
			
			$("#CelTotalSumatoria").append("<strong>" + new Intl.NumberFormat("en-us").format(celularescon) + "</strong>");
			$("#CelStockTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(celularessin.toFixed(0)) + "</strong>");
			$("#HHRecibidasTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(handheldsbod) + "</strong>");
			$("#HHDecomisoTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(handheldspen.toFixed(0)) + "</strong>");
			$("#BajasSoliTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(bajassolicitadas) + "</strong>");
			$("#BajasNTTTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(bajasadministracion) + "</strong>");
			$("#RemorzadasTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(remorzadas) + "</strong>");
			
			$("#HHRecibidasPorcentaje").empty();
			$("#HHDecomisoPorcentaje").empty();
			$("#BajasSoliPorcentaje").empty();
			$("#BajasNTTPorcentaje").empty();
			
			$("#HHRecibidasPorcentaje").append("<strong>%" + ((handheldsbod / celularessin * 100).toFixed(0)) + "</strong>");
			$("#HHDecomisoPorcentaje").append("<strong>%" + ((handheldspen / celularessin * 100).toFixed(0)) + "</strong>");
			$("#BajasSoliPorcentaje").append("<strong>%" + ((bajassolicitadas / celularessin * 100).toFixed(0)) + "</strong>");
			$("#BajasNTTPorcentaje").append("<strong>%" + ((bajasadministracion / bajassolicitadas * 100).toFixed(0)) + "</strong>");
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/reporte-BIMBO.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			$("#CelTotalBimbo").append("<strong>" + new Intl.NumberFormat("en-us").format(page[0]) + "</strong>");
			$("#CelStockBimbo").append("<strong>" + new Intl.NumberFormat("en-us").format(page[1].toFixed(0)) + "</strong>");
			$("#HHRecibidasBimbo").append("<strong>" + new Intl.NumberFormat("en-us").format(page[2]) + "</strong>");
			$("#HHDecomisoBimbo").append("<strong>" + new Intl.NumberFormat("en-us").format(page[3].toFixed(0)) + "</strong>");
			$("#BajasSoliBimbo").append("<strong>" + new Intl.NumberFormat("en-us").format(page[4]) + "</strong>");
			$("#BajasNTTBimbo").append("<strong>" + new Intl.NumberFormat("en-us").format(page[5]) + "</strong>");
			$("#RemorzadasBimbo").append("<strong>" + new Intl.NumberFormat("en-us").format(page[6]) + "</strong>");
			
			celularescon += Number(page[0]);
			celularessin += Number(page[1]);
			handheldsbod += Number(page[2]);
			handheldspen += Number(page[3]);
			bajassolicitadas += Number(page[4]);
			bajasadministracion += Number(page[5]);
			remorzadas += Number(page[6]);
			
			$("#CelTotalSumatoria").empty();
			$("#CelStockTotal").empty();
			$("#HHRecibidasTotal").empty();
			$("#HHDecomisoTotal").empty();
			$("#BajasSoliTotal").empty();
			$("#BajasNTTTotal").empty();
			$("#RemorzadasTotal").empty();
			
			$("#CelTotalSumatoria").append("<strong>" + new Intl.NumberFormat("en-us").format(celularescon) + "</strong>");
			$("#CelStockTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(celularessin.toFixed(0)) + "</strong>");
			$("#HHRecibidasTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(handheldsbod) + "</strong>");
			$("#HHDecomisoTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(handheldspen.toFixed(0)) + "</strong>");
			$("#BajasSoliTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(bajassolicitadas) + "</strong>");
			$("#BajasNTTTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(bajasadministracion) + "</strong>");
			$("#RemorzadasTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(remorzadas) + "</strong>");
			
			$("#HHRecibidasPorcentaje").empty();
			$("#HHDecomisoPorcentaje").empty();
			$("#BajasSoliPorcentaje").empty();
			$("#BajasNTTPorcentaje").empty();
			
			$("#HHRecibidasPorcentaje").append("<strong>%" + ((handheldsbod / celularessin * 100).toFixed(0)) + "</strong>");
			$("#HHDecomisoPorcentaje").append("<strong>%" + ((handheldspen / celularessin * 100).toFixed(0)) + "</strong>");
			$("#BajasSoliPorcentaje").append("<strong>%" + ((bajassolicitadas / celularessin * 100).toFixed(0)) + "</strong>");
			$("#BajasNTTPorcentaje").append("<strong>%" + ((bajasadministracion / bajassolicitadas * 100).toFixed(0)) + "</strong>");
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/reporte-RICOLINO.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			$("#CelTotalRicolino").append("<strong>" + new Intl.NumberFormat("en-us").format(page[0]) + "</strong>");
			$("#CelStockRicolino").append("<strong>" + new Intl.NumberFormat("en-us").format(page[1].toFixed(0)) + "</strong>");
			$("#HHRecibidasRicolino").append("<strong>" + new Intl.NumberFormat("en-us").format(page[2]) + "</strong>");
			$("#HHDecomisoRicolino").append("<strong>" + new Intl.NumberFormat("en-us").format(page[3].toFixed(0)) + "</strong>");
			$("#BajasSoliRicolino").append("<strong>" + new Intl.NumberFormat("en-us").format(page[4]) + "</strong>");
			$("#BajasNTTRicolino").append("<strong>" + new Intl.NumberFormat("en-us").format(page[5]) + "</strong>");
			$("#RemorzadasRicolino").append("<strong>" + new Intl.NumberFormat("en-us").format(page[6]) + "</strong>");
			
			celularescon += Number(page[0]);
			celularessin += Number(page[1]);
			handheldsbod += Number(page[2]);
			handheldspen += Number(page[3]);
			bajassolicitadas += Number(page[4]);
			bajasadministracion += Number(page[5]);
			remorzadas += Number(page[6]);
			
			$("#CelTotalSumatoria").empty();
			$("#CelStockTotal").empty();
			$("#HHRecibidasTotal").empty();
			$("#HHDecomisoTotal").empty();
			$("#BajasSoliTotal").empty();
			$("#BajasNTTTotal").empty();
			$("#RemorzadasTotal").empty();
			
			$("#CelTotalSumatoria").append("<strong>" + new Intl.NumberFormat("en-us").format(celularescon) + "</strong>");
			$("#CelStockTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(celularessin.toFixed(0)) + "</strong>");
			$("#HHRecibidasTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(handheldsbod) + "</strong>");
			$("#HHDecomisoTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(handheldspen.toFixed(0)) + "</strong>");
			$("#BajasSoliTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(bajassolicitadas) + "</strong>");
			$("#BajasNTTTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(bajasadministracion) + "</strong>");
			$("#RemorzadasTotal").append("<strong>" + new Intl.NumberFormat("en-us").format(remorzadas) + "</strong>");
			
			$("#HHRecibidasPorcentaje").empty();
			$("#HHDecomisoPorcentaje").empty();
			$("#BajasSoliPorcentaje").empty();
			$("#BajasNTTPorcentaje").empty();
			
			$("#HHRecibidasPorcentaje").append("<strong>%" + ((handheldsbod / celularessin * 100).toFixed(0)) + "</strong>");
			$("#HHDecomisoPorcentaje").append("<strong>%" + ((handheldspen / celularessin * 100).toFixed(0)) + "</strong>");
			$("#BajasSoliPorcentaje").append("<strong>%" + ((bajassolicitadas / celularessin * 100).toFixed(0)) + "</strong>");
			$("#BajasNTTPorcentaje").append("<strong>%" + ((bajasadministracion / bajassolicitadas * 100).toFixed(0)) + "</strong>");
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/reporte-GENERAL.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			$("#totalBodegaBARCEL").append(new Intl.NumberFormat("en-us").format(page[0]));
			$("#totalBodegaBIMBO").append(new Intl.NumberFormat("en-us").format(page[1]));
			$("#totalBodegaRICOLINO").append(new Intl.NumberFormat("en-us").format(page[2]));
			$("#remorzadoBARCEL").append(new Intl.NumberFormat("en-us").format(page[3]));
			$("#remorzadoBIMBO").append(new Intl.NumberFormat("en-us").format(page[4]));
			$("#remorzadoRICOLINO").append(new Intl.NumberFormat("en-us").format(page[5]));
			$("#bajaBARCEL").append(new Intl.NumberFormat("en-us").format(page[6]));
			$("#bajaBIMBO").append(new Intl.NumberFormat("en-us").format(page[7]));
			$("#bajaRICOLINO").append(new Intl.NumberFormat("en-us").format(page[8]));
			$("#NRBARCEL").append(new Intl.NumberFormat("en-us").format(page[9]));
			$("#NRBIMBO").append(new Intl.NumberFormat("en-us").format(page[10]));
			$("#NRRICOLINO").append(new Intl.NumberFormat("en-us").format(page[11]));
			$("#esperando").append("esperando: " + new Intl.NumberFormat("en-us").format(page[13].toFixed(0)));
			$("#real").append("real: " + new Intl.NumberFormat("en-us").format(page[12]));
			$("#sprint").append("Los Rollouts activos son: " + page[14]);
			$("#esperadoBodegaBARCEL").append(new Intl.NumberFormat("en-us").format((page[0] * 0.9).toFixed(0)));
			$("#esperadoBodegaBIMBO").append(new Intl.NumberFormat("en-us").format((page[1] * 0.9).toFixed(0)));
			$("#esperadoBodegaRICOLINO").append(new Intl.NumberFormat("en-us").format((page[2] * 0.9).toFixed(0)));
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/Obtener-reporte-RICOLINO.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			dataricolino = page;
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/Obtener-reporte-BIMBO.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			databimbo = page;
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/Obtener-reporte-BARCEL.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			databarcel = page;
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/Obtener-reporte-BARCEL.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			var totalCelulares = 0;
			var totalHandHelds = 0;
			for (var i = 0; i < page.length; i++) {
				totalCelulares+=page[i][2];
				totalHandHelds+=page[i][6];
			}
			var diferencia = (totalHandHelds / totalCelulares) * 100;
			$("#estadoBARCEL").append("%" + diferencia.toFixed(2));
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/Obtener-reporte-BIMBO.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			var totalCelulares = 0;
			var totalHandHelds = 0;
			for (var i = 0; i < page.length; i++) {
				totalCelulares+=page[i][2];
				totalHandHelds+=page[i][6];
			}
			var diferencia = (totalHandHelds / totalCelulares) * 100;
			$("#estadoBIMBO").append("%" + diferencia.toFixed(2));
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/Obtener-reporte-RICOLINO.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			var totalCelulares = 0;
			var totalHandHelds = 0;
			for (var i = 0; i < page.length; i++) {
				totalCelulares+=page[i][2];
				totalHandHelds+=page[i][6];
			}
			var diferencia = (totalHandHelds / totalCelulares) * 100;
			$("#estadoRICOLINO").append("%" + diferencia.toFixed(2));
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	$("#exportarExcel").click(function() {
		console.log(databarcel);
		var tabla = "<table><tr><td>Codigo de CeVe</td><td>Centro de Venta</td><td>Celulares enviados</td><td>Sprint</td><td>Bajas</td><td>Hand Held por Ruta</td><td>Hand Held Recibidos</td><td>Diferencia de HandHeld</td><td>Diferencia de Celular</td></tr>";
		for (var i = 0; i < databarcel.length; i++){
			tabla+= "<tr><td>" + databarcel[i][0] + "</td><td>"+ databarcel[i][1] + "</td><td>"+ databarcel[i][2] + "</td><td>"+ databarcel[i][3] + "</td><td>"+ databarcel[i][4] + "</td><td>"+ databarcel[i][5] + "</td><td>"+ databarcel[i][6] + "</td><td>"+ databarcel[i][7] + "</td><td>"+ databarcel[i][8] + "</td><td></tr>";
		}
		for (var i = 0; i < databimbo.length; i++){
			tabla+= "<tr><td>" + databimbo[i][0] + "</td><td>"+ databimbo[i][1] + "</td><td>"+ databimbo[i][2] + "</td><td>"+ databimbo[i][3] + "</td><td>"+ databimbo[i][4] + "</td><td>"+ databimbo[i][5] + "</td><td>"+ databimbo[i][6] + "</td><td>"+ databimbo[i][7] + "</td><td>"+ databimbo[i][8] + "</td><td></tr>";
		}
		for (var i = 0; i < dataricolino.length; i++){
			tabla+= "<tr><td>" + dataricolino[i][0] + "</td><td>"+ dataricolino[i][1] + "</td><td>"+ dataricolino[i][2] + "</td><td>"+ dataricolino[i][3] + "</td><td>"+ dataricolino[i][4] + "</td><td>"+ dataricolino[i][5] + "</td><td>"+ dataricolino[i][6] + "</td><td>"+ dataricolino[i][7] + "</td><td>"+ dataricolino[i][8] + "</td><td></tr>";
		}
		tabla += "</table>";
		console.log(tabla);
		$.ajax({
			url: "decomiso-rtm.000webhostapp.com/php/exportarExcel.php",
			dataType: "text",
			data: {
				data: tabla
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