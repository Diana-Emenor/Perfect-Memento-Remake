$(document).ready(function () {
	$.ajax({
		url: "https://decomiso-rtm.000webhostapp.com/php/obtenerSesion.php",
		type: "GET"
	})
	.done(function (info) {
		var info2 = JSON.parse(info);
		if(info2['email'] !== 'root@localhost') {
			alert("No se inició como root, redireccionando...");
			location.href='./index.html';
		}
	})
	.fail(function (x, estado, exception) {
		alert("No ha iniciado sesion, redireccionando...");
		location.href='./index.html';
	});

    function getExtension(string) {
        var pos = string.lastIndexOf(".");
        if (string === "" || pos < 1) {
            return "";
        }
        return string.slice(pos + 1);
    }
	
	var separado = new Array();

    $("#myFile").change(function (event) {
        if (getExtension($("input[type=file]").val().split("\\").pop()) === "xlsx") {
            $("#submit").removeAttr("disabled");
        } else { 
            $("#submit").attr("disabled", true);
            alert("El tipo de archivo no corresponde a un documento de Excel (.xlsx)");
        }
    });
	var filename;
	
	/*var subirInventario = $.ajax({
			url: "./php/SubirInventario.php",
			type: "POST",
			datatype: "text",
			data: {
				data: data
			},
			done: function(message) {
				console.log(message);
			},
			fail: function(x) {
				alert(x);
			}
		});*/
		
	function SubirResto(){
		$.ajax({
			url: 'https://decomiso-rtm.000webhostapp.com/php/subir-Resto.php',
			type: 'POST',
			data: {
				file: filename
			}
		})
		.done(function(data){
			$('#myModal').modal('toggle');
			$("#loader").css("display", "none");
			alert(data);
		})
		.fail(function(x) {
			console.log(x);
			SubirResto();
		});
	}
	
	function SubirInventario(data) {
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/SubirInventario.php",
			type: "POST",
			datatype: "text",
			data: {
				data: data
			}
		})
		.done(function(message) {
			console.log(message);
		})
		.fail(function(x) {
			console.log(x);
			SubirInventario();
		});
	}
	
	function ObtenerInventario() {
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/obtener-Inventario.php",
			type: "POST",
			data: {
				file: filename
			}
		})
		.done(function(datas) {
			var data = '';
			var array = JSON.parse(datas);
			for(var i = 0; i < array.length; i++){
				if(i === array.length - 1) {
					data+= '("' + i + '", "' + array[i].join('", "') + '")';
					separado.push(data);
				} else if((i % 4000) == 0) {
					data+= '("' + i + '", "' + array[i].join('", "') + '")';
					separado.push(data);
					data='';
				} else {
					data+= '("' + i + '", "' + array[i].join('", "') + '"), ';
				}
			}
			for (var i = 0; i < separado.length; i++) {
				var string = "#Tercerpaso" + i;
				console.log(string);
				$("#this").append('<button id="TercerPaso' + i + '" class="btn btn-outline-primary inventario">Tercer paso (subpaso ' + i + ') de la Importación</button>');
				
			}
			$("#this").append('<button id="CuartoPaso" class="btn btn-outline-primary">Ultimo paso de la Importación</button>');
		})
		.fail(function(x) {
			console.log(x);
			ObtenerInventario();
		});
	}
		
	function BorrarDatos() {
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/BorrarDatos.php",
			type: "POST"
		})
		.done( function (info) {
			console.log();
			$("#this").append('<button id="SegundoPaso" class="btn btn-outline-primary">Segundo paso de la Importación</button>');
		})
		.fail(function (x, estado, exception) {
			console.log(x);
			BorrarDatos();
		});
	}
	
	var uploader = new plupload.Uploader({
		runtimes: 'html5,html4',
		browse_button: 'myFile',
		url: 'https://decomiso-rtm.000webhostapp.com/php/guardarArchivo.php',
		chunk_size: '5mb',
		init: {
			PostInit: function () {
				$("#filelist").html("");
			},
			FilesAdded: function (up, files) {
				plupload.each(files, function (file) {
					//$("#loader").css("display", "block");
					//$('#myModal').modal('toggle');
					filename = file["name"];
					$("#filelist").html($("#filelist").html() + `<div id="${file.id}">Subiendo archivo: ${file.name} (${plupload.formatSize(file.size)}) <strong></strong></div>`);
				});
				uploader.start();
			},
			UploadProgress: function (up, file) {
				document.querySelector(`#${file.id} strong`).innerHTML = `<span>${file.percent}%</span>`;
			},
			FileUploaded: function() {
				//add buttons
				$("#this").append("<p>Debido a las limitaciones del servidor gratuito, se tiene que dividir las peticiones, por lo que los botones aparecen para poder continuar sin errores</p>");
				$("#this").append('<button id="PrimerPaso" class="btn btn-outline-primary">Primer paso de la Importación</button>');
			},
			error: function (up, err) {
				console.log(err);
			}
		}
	});
	uploader.init();
	
	$(document).on('click', "#PrimerPaso", function() {
		BorrarDatos();
	});
	
	$(document).on('click', "#SegundoPaso", function() {
		ObtenerInventario();
	});
	
	$(document).on('click', "#CuartoPaso", function() {
		SubirResto();
	});
	
	$(document).on('click', ".inventario", function() {
		var regex=/[0-9]+/;
		SubirInventario(separado[parseInt(regex.exec(this.id)[0])]);
	});
	
	$("#cerrarSesion").click(function() {
		$.ajax({
			url: "https://decomiso-rtm.000webhostapp.com/php/logout.php",
			type: "GET"
		})
		.done(function () {
			alert("Sesión cerrada correctamente");
			location.href='./index.html';
		})
		.fail(function (x, estado, exception) {
			console.log(x);
		});
	});
});