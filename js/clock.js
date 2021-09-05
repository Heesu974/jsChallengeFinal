const clock = document.querySelector("#clock");

function paintClock() {
    let date = new Date();
    let hours = JSON.stringify(date.getHours()).padStart(2, 0);
    let minutes = JSON.stringify(date.getMinutes()).padStart(2, 0);
    let seconds = JSON.stringify(date.getSeconds()).padStart(2, 0);


    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}
paintClock();
setInterval(paintClock, 1000);




