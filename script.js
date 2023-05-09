const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp")

function lampOn(){
     lamp.src = './img/turnon.png';
}
turnOn.addEventListener('click', lampOn);
lamp.addEventListener('mouseover', lampOn);

function lampOff(){
    lamp.src = './img/turnoff.png';
}
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseleave', lampOff);



