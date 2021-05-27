$(function(){
	const limit = 4;
	var pos = 1;
	var idtext = "#booklet-text-"
	
	document.onkeydown = function(key) {
		switch(key.keyCode) {
			case 37:
				if(pos > 1) {
					pos--;
					var aux = idtext + (pos + 1);
					$(aux).attr("hidden", true);
					var aux = idtext + pos;
					$(aux).attr("hidden", false);
					if(pos==1) {
						$("#previous-booklet-1").attr("disabled", true);
						$("#previous-booklet-2").attr("disabled", true);
					} else if(pos == 3) {
						$("#next-booklet-1").attr("disabled", false);
						$("#next-booklet-2").attr("disabled", false);
					}
					$("#img-booklet").attr("src", "./Images/Booklet/Booklet " + pos + ".jpg");
				} else {
					alert("Llegó al límite");
				}
				break;
			case 39:
				if(pos == limit) {
					alert("Llegó al límite");
				} else {
					pos++;
					var aux = idtext + (pos - 1);
					$(aux).attr("hidden", true);
					var aux = idtext + pos;
					$(aux).attr("hidden", false);
					if(pos==2) {
						$("#previous-booklet-1").attr("disabled", false);
						$("#previous-booklet-2").attr("disabled", false);
					} else if(pos == 4) {
						$("#next-booklet-1").attr("disabled", true);
						$("#next-booklet-2").attr("disabled", true);
					}
					$("#img-booklet").attr("src", "./Images/Booklet/Booklet " + pos + ".jpg");
				}
				break;
			default: 
				break;
		}
	};
	
	$(".previousb").click(function() {
		if(pos > 1) {
			pos--;
			var aux = idtext + (pos + 1);
			$(aux).attr("hidden", true);
			var aux = idtext + pos;
			$(aux).attr("hidden", false);
			$("#img-booklet").attr("src", "./Images/Booklet/Booklet " + pos + ".jpg");
		} else {
			alert("Llegó al límite");
		}
	});
	
	$(".nextb").click(function() {
		if(pos == limit) {
			alert("Llegó al límite");
		} else {
			pos++;
			var aux = idtext + (pos - 1);
			$(aux).attr("hidden", true);
			var aux = idtext + pos;
			$(aux).attr("hidden", false);
			$("#img-booklet").attr("src", "./Images/Booklet/Booklet " + pos + ".jpg");
		}
	});
});