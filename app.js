const element = document.getElementById("NavbarLeft");
const arrow = document.getElementById("leftbuttonarrow");
const button = document.getElementById("NavbarLeftButton");

const element2 = document.getElementById("NavbarRight");
const arrow2 = document.getElementById("rightbuttonarrow");
const button2 = document.getElementById("NavbarRightButton");

let flip_flop2 = 0;
let flip_flop = 0;

function closeNav() {
    if(window.innerWidth > 1024) {
        if (flip_flop == 0) {
            element.style.width = "0px";
            flip_flop = 1;
            arrow.style.left = "0.5vw";
            button.style.left = "0.5vw";
            arrow.style.rotate = "180deg";
        } else {
            console.log("test");
            element.style.width = "20vw";
            arrow.style.left = "17vw";
            button.style.left = "17vw";
            arrow.style.rotate = "0deg";
            flip_flop = 0;
        }
    } else {
        if (flip_flop == 0) {
            element.style.width = "0px";
            arrow.style.rotate = "180deg"
            flip_flop = 1;
            arrow.style.left = "3.2vw";
            button.style.left = "3.2vw";
        } else {
            console.log("test");
            element.style.width = "100vw";
            flip_flop = 0;
            arrow.style.rotate = "0deg"
            arrow.style.left = "7.5vw";
            button.style.left = "7.5vw";
        }
    }

}

function closeNav2() {
    if(window.innerWidth > 1024) {
        if (flip_flop2 == 0) {
            element2.style.width = "0px";
            flip_flop2 = 1;
            arrow2.style.right = "0.5vw";
            button2.style.right = "0.5vw";
            arrow2.style.rotate = "180deg";
            arrow2.style.right = "0vw";
        } else {
            console.log("test");
            element2.style.width = "20vw";
            arrow2.style.right = "17vw";
            button2.style.right = "17vw";
            arrow2.style.rotate = "0deg";
            flip_flop2 = 0;
        }
    } else {
        if (flip_flop2 == 0) {
            element2.style.width = "0px";
            flip_flop2 = 1;
            arrow2.style.rotate = "180deg"
            arrow2.style.left = "3.2vw";
            button2.style.left = "3.2vw";
        } else {
            console.log("test");
            element2.style.width = "100vw";
            flip_flop2 = 0;
            arrow2.style.rotate = "0deg";
            arrow2.style.left = "7.5vw";
            button2.style.left = "7.5vw";
        }
    }

}