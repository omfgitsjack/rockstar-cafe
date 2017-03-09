$(document).ready(function () {
    $(".mobile-navbar nav a.menubar").on("click", function(){
        $(".mobile-navbar nav ul").toggleClass("open");
        });
});