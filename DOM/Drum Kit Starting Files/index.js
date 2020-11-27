const instrumentBtn = document.querySelectorAll("button");


instrumentBtn.forEach(element => element.addEventListener("click", event => {
    // console.log("Dum..");
    // console.log(event);
    console.log(element.classList[0]);

    makesound(element.classList[0]);
    addAnimation(element.classList[0])
}));

document.addEventListener("keydown", event => {
    try {
        addAnimation(event.key);
    }
    catch (err) {

    }
    makesound(event.key);
});

function addAnimation(value) {
    var classname = "." + value;
    console.log(classname);
    var element = document.querySelector(classname).classList;
    element.add("pressed");
    setTimeout(function () {
        element.remove("pressed");
    }, 100);
}

function makesound(value) {
    switch (value) {
        case "w":
            console.log("Dum..");
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            console.log("Das..");
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            console.log("Tum..");
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            console.log("Tam..");
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            console.log("Dashh..");
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            console.log("tesh..");
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "l":
            console.log("Boobb..");
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
            console.log("Yo what the fuck");
    }

}
