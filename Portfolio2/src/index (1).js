$(document).ready(function () {
    $('#fullpage').fullpage();
});

// Applies all a tags into target = "_blank"

var a = document.getElementsByTagName('a');

for (var i = 0; i < a.length; i++) {

    a[i].target = "_blank";

}