// window.alert('This is a test version');


let x = 0;
let y;
let z;
var voiceMessage = new Audio('media/voice-message.mp3');
var lightSwitch = new Audio('media/lightSwitchSound.mp3');

const e7a = document.getElementById("a7a");
const e8a = document.getElementById("a8a");

function notification(text){
    document.getElementById("notification").textContent = text;
}
function text(element, text) {document.getElementById(element).textContent = text;}
function removeElementOpacity(element) {document.getElementById(element).style.opacity = 0;}
function removeElement(element) {
    const el = document.getElementById(element);
    if (el) el.remove();
}
function endAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}
function createElement(element, id, parent) {
    var el = document.createElement(element);
    el.setAttribute("id", id);
    document.getElementById(parent).append(el);
}
function main() {
    lightSwitch.currentTime = 0;
    document.getElementById("a1b").style.opacity = 0;
    setTimeout(() => removeElementOpacity("upper"), 1000);
    setTimeout(() => lightSwitch.play(), 1000);
    setTimeout(() => endAudio(lightSwitch), 1900);
    setTimeout(() => removeElementOpacity("text"), 3000);
    setTimeout(() => lightSwitch.play(), 3000);
    setTimeout(() => endAudio(lightSwitch), 3900);
    setTimeout(() => {
        removeElementOpacity("verify");
        setTimeout(() => {
            removeElement("upper");
            removeElement("text");
            removeElement("verify");
            text("a1b", "Hello ellie")
        }, 500);
    }, 4000);
    setTimeout(() => {document.getElementById("a1b").style.opacity = 1;}, 8000);
    setTimeout(() => {
        document.getElementById("a1b").style.opacity = 0;
        setTimeout(() => {voiceMessage.play();}, 3000);
    }, 10000);
}
function wrong() {
    notification("Incorrect, please try again!");
    setTimeout(() => notification(""), 2500);
}

function verify() {
    z = document.getElementById("bornon").value;
    console.log(z)
    if (z.length === 3 || z.length === 4) {
        let e = "";
        for (let i = 0; i < z.length; i++) {
            e += String.fromCharCode(z.charCodeAt(i) - 1);
        }

        const hopLe1 = [69, 101];
        const hopLe2 = [83, 115];
        const hopLe3 = [84, 116];
        const hopLe4 = [49];

        let flag = false;
        if (hopLe1.includes(e.charCodeAt(0))) {
            if (hopLe2.includes(e.charCodeAt(1))) {
                if (hopLe3.includes(e.charCodeAt(2))) {
                    if(e.length == 4){
                        if (hopLe4.includes(e.charCodeAt(3))) {
                            main();
                        }
                        else {
                            wrong();
                        }
                    }
                    else{
                        main();
                    }
                }
                else {
                    wrong();
                }
            }
            else {
                wrong();
            }
        }
        else {
            wrong();
        }
    }
    else {
        wrong();
    }
}
