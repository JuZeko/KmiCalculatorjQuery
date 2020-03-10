$(document).ready(function() {
    $("button").click(function() {
        var atsakymas = (parseInt($("#svoris").val()) / Math.pow(parseInt($("#ugis").val()), 2)) * 10000;
        atsakymas = atsakymas.toPrecision(3);

        if (((atsakymas > 80) || (atsakymas < 8) || (atsakymas === 0))) {

            $("#kmi").text("Neteisingai įvesti duomenys ")

        } else {


            $("#kmi").text("Tavo KMI yra " + atsakymas);
            tikrinimas(atsakymas);
        }

    });
});

function tikrinimas(atsakymas) {


    if ((atsakymas > 18.5) && (atsakymas < 24.9)) {
        $("#kmi").text(" Jūsų kmi yra geras " + atsakymas)
        $("#img").attr("src","https://thumbs.dreamstime.com/b/skinny-guy-n-gym-vector-illustration-cool-cartoon-style-geometrical-flat-isolated-white-background-70243123.jpg");
 
    }
    if (atsakymas < 18.5) {
        $("#kmi").text("Jūsų kmi yra per mažas " + atsakymas)
  $("#img").attr("src","https://friendlystock.com/wp-content/uploads/2018/09/6-dabbing-skeleton-character-vector-cartoon-clipart.jpg");


    }
    if (atsakymas > 24.9) {
        $("#kmi").text(" Jūsų kmi yra per didelis " + atsakymas)
          $("#img").attr("src","https://previews.123rf.com/images/lineartestpilot/lineartestpilot1802/lineartestpilot180273512/95584741-cute-fat-cartoon-human.jpg");
    }
}