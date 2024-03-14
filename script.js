let hours = document.getElementById("hours");
let minute = document.getElementById('minute');
let second = document.getElementById('second');
let ampm = document.getElementById("ampm");

function updateDigitClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = h >= 12 ? 'Pm' : 'Am';
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    if(h > 13){
        h = h - 12;
    }
    hours.innerText = h;
    minute.innerText = m;
    second.innerText = s;
    ampm.innerText = am;
   
    setTimeout(() =>{
        updateDigitClock();
    },1000 );
}

updateDigitClock();