function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

$(document).ready(function() {

    var d = new Date();

    document.getElementById("year").innerText = d.getFullYear();
    document.getElementById("mounth").innerText = d.getMonth() + 1;


    for (var i = 0; i < daysInMonth(d.getMonth(), d.getFullYear()); i++) {
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "150px";
        div.style.background = "red";
        div.style.color = "white";
        div.innerHTML = i + 1;
        div.className = "day";

        document.getElementById("mounth").appendChild(div);
        if (i % 7 == 0)
            document.createElement("br");

    }
});