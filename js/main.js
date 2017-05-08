function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

$(document).ready(function() {

    var d = new Date();
	var miesiac = "";
	
	if (d.getMonth() == 0)
		document.getElementById("month").innerText = "Styczeñ";
	else if (d.getMonth() == 1)
		document.getElementById("month").innerText = "Luty";
	else if (d.getMonth() == 2)
		document.getElementById("month").innerText = "Marzec";
	else if (d.getMonth() == 3)
		document.getElementById("month").innerText = "Kwiecieñ";
	else if (d.getMonth() == 4)
		document.getElementById("month").innerText = "Maj";
	else if (d.getMonth() == 5)
		document.getElementById("month").innerText = "Czerwiec";
	else if (d.getMonth() == 6)
		document.getElementById("month").innerText = "Lipiec";
	else if (d.getMonth() == 7)
		document.getElementById("month").innerText = "Sierpieñ";
	else if (d.getMonth() == 8)
		document.getElementById("month").innerText = "Wrzesieñ";
	else if (d.getMonth() == 9)
		document.getElementById("month").innerText = "PaŸdziernik";
	else if (d.getMonth() == 10)
		document.getElementById("month").innerText = "Listopad";
	else if (d.getMonth() == 11)
		document.getElementById("month").innerText = "Grudzieñ";
	
    document.getElementById("month").innerText += " " + d.getFullYear();
    
	var szerokosc = (100 / 7);
    
	for (var i = 0; i < daysInMonth(d.getMonth(), d.getFullYear()); i++) {
        var div = document.createElement("div");
        div.style.width = szerokosc + "%";
        div.innerHTML = i + 1;
        div.className = "day";

        document.getElementById("calendar").appendChild(div);
        if (i % 7 == 0)
            document.createElement("br");

    }
});