//bugs a resolver: .Não permitir a troca de tempo após play ser apertado
//                 .

const cucko = new Audio('song/cucko.mp3')
let minute = 25;
let minute1 = 25;
let minute2 = 5;
let second = 0;
let contador;
let session;
let i = 0;

function add1() {
    if(minute1 != 30) {
    minute1++;
    document.getElementById('workTime').innerHTML = `${minute1} min`;
    document.getElementById('minute').innerHTML = returnData(minute1)
    }
    minute = minute1
}

function sub1() {
    if(minute1 != 15) {
        minute1--;
        document.getElementById('workTime').innerHTML = `${minute1} min`;
        document.getElementById('minute').innerHTML = returnData(minute1)
    }
    minute = minute1

}

function add2() {
    if(minute2 != 15) {
    minute2++;
    document.getElementById('breakTime').innerHTML = `${minute2} min`;
    }
}

function sub2() {
    if(minute2 != 5) {
        minute2--;
        document.getElementById('breakTime').innerHTML = `${minute2} min`;
        }
}

trocaSession();

function trocaSession() {
    if (session == 'working') {
        session = 'break'
    } else {
        session = 'working'
    }
    document.getElementById('situation').innerHTML = `${session} session`
}

function pause() {
        clearInterval(contador)  
}

function pauseplay() {
    if (i == 0) {
        contador = setInterval(() => {timer(); }, 1)
        document.getElementById('playpause').innerHTML = 'PAUSE'
        i++; 
    } else {
        clearInterval(contador)
        document.getElementById('playpause').innerHTML = 'PLAY'
        i--;
    }       
}

function reset() {
    document.location.reload(true);
}

function timer() {
    second--;
    if (second == -1) {
        second = 59
        minute--;
    }
    document.getElementById('minute').innerHTML = `${returnData(minute)}`
    document.getElementById('second').innerHTML = `${returnData(second)}`
    if (minute == 0 && second == 0) {
        cucko.play()
        if (session == 'working') {
            document.getElementById('minute').innerHTML = returnData(minute2)
            document.getElementById('second').innerHTML = '00'
            minute = minute2
            second = 0
        } else {
            document.getElementById('minute').innerHTML = returnData(minute1)
            document.getElementById('second').innerHTML = '00'
            minute = minute1
            second = 0
        }
        trocaSession()
        document.getElementById('situation').innerHTML = `${session} session`
        pause()
        document.getElementById('playpause').innerHTML = 'PLAY'
        i--;
    }
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}