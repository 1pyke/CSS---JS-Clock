const hands = document.querySelectorAll('.hand');
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    const secoundsDegrees = ((seconds / 60) * 360) + 90;
    const minDegress = ((minutes / 60) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegress}deg)`;
    secondHand.style.transform = `rotate(${secoundsDegrees}deg)`
    console.log(seconds);
    if (seconds === 0) {
        hands.forEach(hand => hand.style.transitionDuration = '0s');
    } else {
        hands.forEach(hand => hand.style.transitionDuration = '0.05s');
    }

}
setInterval(setDate, 1000);
setDate();