const clock = document.querySelector('.clock');

setInterval(function(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    clock.innerHTML = `${hour}:${minute}:${second}`;
},10);