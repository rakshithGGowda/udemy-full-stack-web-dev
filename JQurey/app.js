$("h1").css("color", "#f34194");


$(document).keypress(function (event) {
    console.log(event.key);
    $("h1").text(event.key)
})