// window.alert('This is a test version');


let x = 0;
let y;
let z;
var textMessage = new Audio('media/iPhoneMessageSound.mp3');
var lightSwitch = new Audio('media/lightSwitchSound.mp3');
var bigSwitch = new Audio('media/bigSwitchSound.mp3');

const e7a = document.getElementById("a7a");
const e8a = document.getElementById("a8a");

function notification(text){
    document.getElementById("notification").textContent = text;
}
function scrollToBottom() {
    window.scrollTo({
        behavior: "smooth",
        top: document.body.scrollHeight,
    });
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
function frame1() {
    
    setTimeout(() => text("a1b", 
        "I apologize for ts serious message, I may hav to use some slangs and abbreviations to makit less formal:)\n \nHi\nUh..\nIm kinda exhausted recently\nI thought its summer and we got so much time for ourselves but is it that really busy for not messaging a friend?\n \nDun get me wrong gyal, I dont mean to take all of ur spare time but ur friends can easily chat with you, watabout me then.\nAint I ur friend?\nI had thinked bout if we can linked up earlier but nah...\nHow do I pick u up when I unable to text u.\nI feels like there is a concrete wall between us.\nI cant see u, cant feel u, cant touch u.\nSometimes I wish u can js u know\ntell me wat u need, ur feelings or anything else so that I can understand.\nNo talking, no facing, no rl interaction, I dont know wat type of relationship is ts.\n \nAfterall, the thing that Im afraid the most is all of our interactions be observed and ur acts be suggested by some of ur friends, but not urself.\nFor sure u can share em anything but do they know urself than u do?\nSry if Ive said anything wrongly cuz Im also on the way to learn to be more mature.\nSummer gotta be end soon and things gonna be alright.\nIf there is nothing much change, ts might be my last message to u.\nI also wanna treat my inside nicely.\n \nJs keep in mind not to consume too much sugar and stay hydrated.\nGoodbye ellie."
    ), 200);
}

function verify() {
    z = document.getElementById("bornon").value;
    console.log(z)
    if(z == "IVE" || z == "Ive" || z == "I've"){
        lightSwitch.currentTime = 0;
        document.getElementById("a1b").style.opacity = 0;
        setTimeout(() => removeElementOpacity("upper"), 1000);
        setTimeout(() => lightSwitch.play(), 1000);
        setTimeout(() => endAudio(lightSwitch), 1900);
        setTimeout(() => removeElementOpacity("lower"), 2000);
        setTimeout(() => lightSwitch.play(), 2000);
        setTimeout(() => endAudio(lightSwitch), 2900);
        setTimeout(() => removeElementOpacity("text"), 3000);
        setTimeout(() => lightSwitch.play(), 3000);
        setTimeout(() => endAudio(lightSwitch), 3900);
        setTimeout(() => {
            removeElementOpacity("verify");
            setTimeout(() => {
                removeElement("upper");
                removeElement("lower");
                removeElement("text");
                removeElement("verify");
                text("a1b", "Hello ellie")
            }, 500);
        }, 4000);
        setTimeout(() => {document.getElementById("a1b").style.opacity = 1;}, 8000);
        setTimeout(() => {document.getElementById("a1b").style.opacity = 0;}, 10000);
        setTimeout(() => {
            text("a1b", "");
            document.getElementById("a1b").style.opacity = 1;
            removeElementOpacity("notification");
            removeElement("notification");
            frame1();
            document.getElementById("a1b").style.transition = "0.8s ease-in-out";
            document.getElementById("a1b").style.fontSize = "40px";
            document.getElementById("a1b").style.textAlign = "left";
            document.getElementById("a1b").style.margin = "0";
            document.getElementById("a1b").style.padding = "100px";
            document.getElementById("a1b").style.position = "absolute";
            document.getElementById("a1b").style.display = "block";
            document.getElementById("a1b").style.whiteSpace = "pre-line";
            document.getElementById("a1b").style.fontFamily = "roboto";
            document.getElementById("a1b").style.top = "0";
            document.getElementById("a1b").style.left = "0";
            document.getElementById("a1b").style.boxSizing = "border-box";
            document.getElementById("a1b").style.overflow = "visible";
        }, 10800);
        x++;
    }
    else{
        notification("Incorrect, please try again!")
        setTimeout(() => notification(""), 2500);
    }
}