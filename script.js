// JavaScript Document

let ampm = document.getElementById('ampm')
function displayTime(){
    let dateTime = new Date();
    let hr = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec =dateTime.getSeconds();
	let day=dateTime.getDay();
    if(hr>12){
        hr = hr - 12
        ampm.innerHTML = 'PM'
    }
       
    document.getElementById('hours').innerHTML = padZero(hr)
    document.getElementById('mins').innerHTML = padZero(min)
    document.getElementById('seconds').innerHTML = padZero(sec)
	document.getElementById('day').innerHTML=day
}

function padZero(num){
    return num<10?"0"+num:num
}

setInterval(displayTime,500)