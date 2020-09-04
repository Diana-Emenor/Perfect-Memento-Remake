$(function(){
	$("#loader").css("display", "block");
	$('#myModal').modal('toggle');
	
	var tabla = $("#reporte").DataTable({
		scrollX: true
	});
	
	$.ajax({
		url: "decomiso-rtm.000webhostapp.com/php/Receive-Inv.php",
		dataType: "json",
		type: "GET",
		success: function (page) {
			console.log(page);
			for (var i = 0; i < page.length; i++) {
				tabla.row.add(page[i]);
			}
			tabla.draw();
			$("#loader").css("display", "none");
			$('#myModal').modal('toggle');
		},
		error: function (a, statuss, excepcion) {
			console.log(a);
		}
	});
	
	$("#exportarCVS").click(function() {
		var registros = tabla.rows().nodes();
		var str = '<table><tr>';
		for (var i = 0; i < registros.length; i++) {
			str+=registros[i].innerHTML.toString() + '</tr><tr>';
		}
		str+= '</tr></table>';
		$.ajax({
			url: "decomiso-rtm.000webhostapp.com/php/exportarCVS.php",
			dataType: "text",
			data: {
				data: str
			},
			type: "POST",
			success: function (file) {
				var a = document.createElement("a");
				a.style.display = "none";
				document.body.appendChild(a);
				a.href = new URL("http://decomiso_rtm_hh_mexico/Test/" + file)
				a.setAttribute("download", './' + file);
				a.click();
				window.URL.revokeObjectURL(a.href);
				document.body.removeChild(a);
			},
			error: function (x, estado, exception) {
				console.log(x);
			}
		});
	});
	
	$("#exportarExcel").click(function() {
		var registros = tabla.rows().nodes();
		var str = '<table><tr>';
		for (var i = 0; i < registros.length; i++) {
			str+=registros[i].innerHTML.toString() + '</tr><tr>';
		}
		str+= '</tr></table>';
		$.ajax({
			url: "decomiso-rtm.000webhostapp.com/php/exportarExcel.php",
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