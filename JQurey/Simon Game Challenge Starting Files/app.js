sequence = [];
count = 0;
colour = ["green", "red", "yellow", "blue"];
var i = 0;


$(document).keypress(function (event) {

    if (event.key.toUpperCase() === "A" && count == 0) {
        count++;
        playGame();
    }
});

function playGame() {
    i = 0;
    document.querySelector("#level-title").textContent = "Level " + count;
    // sleep(1000);
    createSequence();

}

function createSequence() {
    var value = Math.floor(Math.random() * 4)
    var pickcolor = colour[value];
    // console.log(pickcolor);
    $("#" + pickcolor).fadeIn(100).fadeOut(100).fadeIn(100);
    sequence.push(pickcolor);
    makesound(pickcolor);
    // console.log(sequence);
}

$(".btn").click(function (event) {
    // console.log(event.target.id);
    $(event.target).addClass("pressed");
    setTimeout(function () {
        $(event.target).removeClass("pressed");
    }, 100)
    makesound(event.target.id);
    if (sequence[i] != event.target.id) {
        // console.log("wrong wrong wrong..");
        $("body").addClass("game-over");
        document.querySelector("#level-title").textContent = "Game Over, Press Any Key to Restart"
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200)
        count = 0;
        sequence = [];
    }
    else {
        // console.log("right");
        i++;
        if (i == sequence.length) {
            count++;
            setTimeout(function () {
                playGame();
            }, 1000);

        }
    }



});



function makesound(value) {
    switch (value) {

        case "green":
            var audio = new Audio('sounds/green.mp3');
            audio.play();
            // console.log(" green pressed");
            break;

        case "red":
            var audio = new Audio('sounds/red.mp3');
            audio.play();
            // console.log(" red pressed");
            break;

        case "yellow":
            var audio = new Audio('sounds/yellow.mp3');
            audio.play();
            // console.log(" yellow pressed");
            break;

        case "blue":
            var audio = new Audio('sounds/blue.mp3');
            audio.play();
            // console.log(" bule pressed");
            break;

        default:
            console.log("Yo what the fuck..")

    }

}



function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}