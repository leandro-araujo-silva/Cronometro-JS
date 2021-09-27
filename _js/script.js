let display = document.getElementById('display')
let horas = document.getElementById('horas')
let minutos = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let comecar = document.getElementById('comecar')

let cronometroSeg

let horaAtual
let minutoAtual
let segundoAtual

let interval

for (let i = 0; i <= 24; i++) {
  horas.innerHTML += `<option value="${i}">${i}</option>`
}

for (let i = 0; i <= 60; i++) {
  minutos.innerHTML += `<option value="${i}">${i}</option>`
}

for (let i = 1; i <= 60; i++) {
  segundos.innerHTML += `<option value="${i}">${i}</option>`
}

comecar.addEventListener('click', function () {
  horaAtual = horas.value
  minutoAtual = minutos.value
  segundoAtual = segundos.value

  display.childNodes[1].innerHTML =
    horaAtual + ':' + minutoAtual + ':' + segundoAtual

  interval = setInterval(function () {
    segundoAtual--
    if (segundoAtual <= 0) {
      if (minutoAtual > 0) {
        minutoAtual--
        segundoAtual = 59
      } else {
        if (horaAtual > 0) {
          horaAtual--
          minutoAtual = 59
          segundoAtual = 59
        } else {
          alert('Encerrou!')
          document.getElementById('sound').play()
          clearInterval(interval)
        }
      }
    }

    display.childNodes[1].innerHTML = horaAtual + ':' + minutoAtual + ':' + segundoAtual
  }, 1000) //1000 milisegundos = 1 segundo
})
