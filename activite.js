$(function () {

    $bouton = $("#bouton1");

    $message = $("p#messageCache:hidden");

    $bouton.on('click', function () {
        $bouton.hide();
        $message.fadeIn("slow");
    });
});
