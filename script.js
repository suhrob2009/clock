// let i = 0
// let stop;
// function rec() {
//     console.log(i++);
//     if (i <= 10) {
//         rec()
//     }
// }
// stop = setTimeout(() => {
//     rec()
//     if (i == 10) {
//         clearInterval(stop)
//     }
// },1000);

// rec()
// function hello() {
//     console.log("Salom");
// }

// setTimeout(hello,1000); function time

// setInterval(hello,1000)

// let date = new Date();
// console.log(date);
// let day = new Date().getDay()
// console.log(day);
// let mouth = new Date().getMonth()
// console.log(day);
// let year = new Date().getFullYear()
// console.log(day);
// let year = new Date().getFullYear()
// console.log(day);
// let time = new Date().getTime()
// console.log(day);
// let hour = new Date().getHours()
// console.log(day);

const hours = document.querySelector('.hours')
const minutes = document.querySelector('.minutes')

const h = document.querySelector('.h')
const m = document.querySelector('.m')
const s = document.querySelector('.s')

function clock() {
    let time = new Date();

    let hour = new Date().getHours();
    let minut = new Date().getMinutes();
    let sec = new Date().getSeconds();

    hours.innerText = hour
    minutes.innerText = minut
    if (sec < 10) {
        minutes.innerHTML = "0" + sec
    } else {
        minutes.innerHTML = sec
    }
    if (hour < 10) {
        hours.innerHTML = "0" + hour
    } else {
        hour.innerHTML = hour
    }
    s.style.transform = `rotate(${sec * 6}deg)`
    m.style.transform = `rotate(${minut * 6}deg)`
    h.style.transform = `rotate(${hour * 30}deg)`

    setTimeout(() => {
        clock()
    }, 1000);

}
clock()

// tabs

const tabsItem = [...document.querySelectorAll('.tabsItem')]
const tabsConentItem = [...document.querySelectorAll('.tabsContentItem')]

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let k = 0; k < tabsConentItem.length; k++) {
            tabsItem[k].classList.remove('active')
            tabsConentItem[k].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsConentItem[i].classList.add('active')
    })
}


// secondamer

function resetTime() {
    _Soat = 0;
    _Minut = 0;
    _Sekund = 0;
    document.querySelector('.stopwatch__seconds').innerHTML = _Sekund;
    document.querySelector('.stopwatch__minutes').innerHTML = _Minut;
    document.querySelector('.stopwatch__hours').innerHTML = _Soat;
}

function start() {
    tabsLink__span.classList.add('active')
    tabsLink__span.classList.remove('active_clear')
}
function stop() {
    tabsLink__span.classList.remove('active')
    tabsLink__span.classList.add('active_clear')
}
function clear() {
    tabsLink__span.classList.remove('active')
    tabsLink__span.classList.remove('active_clear')
}
function Sekund() {
    stopwatch__seconds.innerHTML = ++_Sekund;
    if (_Sekund === 60) {
        if (_Sekund == 60) {
            stopwatch__seconds.innerHTML = 0
        }
        _Sekund = 0;
        stopwatch__minutes.innerHTML = ++_Minut
        if (_Minut == 60) {
            stopwatch__minutes.innerHTML = 0
            stopwatch__hours.innerHTML = ++_Soat
        }
    }
}
function ifLessThan10() {
    if (_Sekund < 10) {
        _Sekund.innerHTML = "0" + _Sekund
    } else {
        _Sekund.innerHTML = _Sekund
    }
    if (_Minut < 10) {
        _Minut.innerHTML = "0" + _Minut
    } else {
        _Minut.innerHTML = _Minut
    }
    if (_Soat < 10) {
        _Soat.innerHTML = "0" + _Soat
    } else {
        _Soat.innerHTML = _Soat
    }
}





let stopwatch__seconds = document.querySelector('.stopwatch__seconds') //Sekund
let stopwatch__minutes = document.querySelector('.stopwatch__minutes') //Minut
let stopwatch__hours = document.querySelector('.stopwatch__hours') //Soat 
let stopwatchBtn = document.querySelector('.stopwatch__btn') //Tugma
let tabsLink__span = document.querySelector('.tabsLink__span') //Light
let _Soat = 0;
let _Minut = 0;
let _Sekund = 0;
let _Stop;



stopwatchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        ifLessThan10()
        Sekund()
        start()
        _Stop = setInterval(Sekund, 1000);
        this.innerHTML = 'stop'
    } else if (this.innerHTML == 'stop') {
        ifLessThan10()
        stop()
        clearInterval(_Stop)
        this.innerHTML = 'clear'
    } else if (this.innerHTML == 'clear') {
        ifLessThan10()
        resetTime()
        clear()
        this.innerHTML = 'start'
    }
})
