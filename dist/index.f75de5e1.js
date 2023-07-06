AOS.init();
const dataEvento = new Date("July 08, 2023 18:00:00");
const tempoDoEvento = dataEvento.getTime();
const temporizador = setInterval(()=>{
    const agora = new Date;
    const tempoAtual = agora.getTime();
    const tempoRestante = tempoDoEvento - tempoAtual;
    const diasEmMs = 86400000;
    const horasEmMs = 3600000;
    const minutosEmMs = 60000;
    const segundosEmMs = 1000;
    const dias = Math.floor(tempoRestante / diasEmMs);
    const horas = Math.floor(tempoRestante % diasEmMs / horasEmMs);
    const minutos = Math.floor(tempoRestante % horasEmMs / minutosEmMs);
    const segundos = Math.floor(tempoRestante % minutosEmMs / segundosEmMs);
    console.log(dias, horas, minutos, segundos);
    document.getElementById("contador").innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    if (tempoRestante <= 0) {
        clearInterval(temporizador);
        document.getElementById("contador").innerHTML = "  0d 0h 0m 0s";
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
