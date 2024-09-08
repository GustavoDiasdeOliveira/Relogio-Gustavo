const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Adiciona zero à esquerda para horas, minutos e segundos menores que 10
    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    // Atualiza o dia, mês e ano
    let diaAtual = dateToday.getDate();
    let mesAtual = dateToday.getMonth() + 1; // Meses começam de 0 a 11
    let anoAtual = dateToday.getFullYear();

    if (diaAtual < 10) diaAtual = '0' + diaAtual;
    if (mesAtual < 10) mesAtual = '0' + mesAtual;

    dia.textContent = diaAtual;
    mes.textContent = mesAtual;
    ano.textContent = anoAtual;
}, 1000);
