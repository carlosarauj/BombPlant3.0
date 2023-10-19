let interval
let zero = document.querySelector('#zero')

let start = document.querySelector('#start')



let mil = document.querySelector('#mil')
let seg = document.querySelector('#seg')
let min = document.querySelector('#min')

let digit = document.querySelector('#digit')
let disarm = document.querySelector('#disarm')

let miljs = 0
let segjs = 5
let minjs = 0

let paused = true

let senha = 123

digit.style.display = 'none'
disarm.style.display = 'none'

//codigo para  iniciar o cronometro apenas com a tecla 0
document.addEventListener('keydown', function(eventStart) {
    if (eventStart.key == 'Backspace') {
        startTime()
    }
});

//codigo para colocar a senha
document.addEventListener('keydown', function(eventPause) {
    if (eventPause.key == 'Tab') {
        digit.style.display = 'block'

    }
})

document.addEventListener('keydown', function(eventPause) {
    if (eventPause.key == 'Enter') {
        pauseTime()

    }
})

//essa parte so serve para mostrar qual tecla foi usada, nao é necssário
document.addEventListener('keydown', function(event) {
    console.log(event.key);
}) 


//iniciar
function startTime(){
    
//clearInterval para evitar que o start empilhe
    clearInterval(interval)

    interval = setInterval(() => {

//com o if eu fiz a condição da qual o cronometro pode começar. Se a variavel paused for diferente do true, ele inicia somando os milesimos miljs
        if(!paused){
        miljs--
        }

        if(miljs < 0){
            miljs = 99
            segjs--
        }
        
        if(segjs < 0){
            segjs = 59
            minjs--
        }

//aqui eu adicionei o que estava acontecendo no js para o html, para aparecer o tempo contando
        mil.innerHTML = zeroTime(miljs)
        seg.innerHTML = zeroTime(segjs)
        min.innerHTML = zeroTime(minjs)

//poderia ser usado textContent em vez de innerHTML

    }, 10);

    paused = false

}



function pauseTime(){
    if (digit.value == senha){
    paused = true
    disarm.style.display = 'block'
    zero.style.display = 'none'
}

//ajeitar!!!!!!!!
    if (miljs === 0 && segjs === 0 && minjs === 0){
        paused = true
    }
}

//função para adicionar os zeros no cronometro quando o  numero for menor que 10
function zeroTime(time){
    if (time < 10){
        return `0${time}`
    } else {
        return time
    }
}






/*
⠀⠀   ⢀⡴⠁⠀ ⣿⡏⠀⠱⣄
⠀⠀⢀⣴⡟⠁⠀⠀⠀⣿⡇⠀⠀⠀⠙⣷⣄
⠀⠀⠙⢿⣷⣄⠀⠀⠀⣿⡇⠀⠀⢀⣴⣿⠋
⠀⠀⠀⠀⠙⢿⣷⣄⠀⢻⡇⢀⣴⣿⠋
⠀⠀⠀⠀⠀⠀⠈⠻⣷⣾⣷⡿⠋
⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣿⣷⣄
⠀⠀⠀⠀⠀⢀⣶⣿⠟⢹⣏⠻⢿⣷⣄
⠀⠀⠀⢀⣼⣿⠟⠁⠀⢸⣿⠀⠈⠙⢿⣷⣄
⠀⠀⣴⣿⡟⠁⠀⠀⠀⢸⣿⠀⠀⠀⠀⣹⣿⡷
⠀⠀⠈⠻⣿⣦⡀⠀⠀⢸⣿⠀⠀⢀⣼⣿⠏
⠀⠀⠀⠀⠈⠻⣿⣦⡀⢸⣿⠀⣴⣿⠟⠁
⠀⠀⠀⠀⠀⠀⠈⠻⣿⣾⣿⣾⡿⠃⠀
⠀⠀ ⠀⠀⠀⠀⠀⠀⠈⠻⡿⠋
"My honored brethen
We come together
To unite as one
Against those that are damned
We show no mercy
For we have none
Our enemies shall fall
As we uprise
To claim our fate
Now and forever
We'll be together
Love and hate"
*/