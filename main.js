$(document).ready(function () {
	$('.navbar-nav li').click(function (x) {
		$('.navbar-nav li').removeClass('active');
		$(event.target).parent().addClass('active');
	});
});

function showCircuit() {
	$('#circuit').change(function (o) {
		switch (o.target.value) {
			case 'ITA':
				$('#circuitimage').attr('src', 'img/monza.jpg');
				$('#f1sound')[0].play();
				break;
			case 'HUN':
				$('#circuitimage').attr('src', 'img/hungaroring.jpg');
				break;
			case 'BEL':
				$('#circuitimage').attr('src', 'img/spa.jpg');
				break;
			case 'MON':
				$('#circuitimage').attr('src', 'img/monaco.jpg');
				break;
			default:
				break;
		}
	});
}

function calculate() {
	let length = document.querySelector("#circuit").value;

	if (length == "HUN") {
		length = 4.381;
	} else if (length == "MON") {
		length = 3.337;
	} else if (length == "BEL") {
		length = 7.004;
	} else {
		length = 5.793;
	}

	let time = document.querySelector("#laptime").value;

	let avgspd = length / (time / 3600);

	if (time < 1) {
		document.querySelector("#averagespeed").value = "";
		document.querySelector("#laptime").value = "";
	} else {
		document.querySelector("#averagespeed").value = avgspd + " km/h";
	}
}