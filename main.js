const dataDomani= new Date("Jan 21, 2024 09:30:00").getTime()
const countDown = setInterval(function(){
    const data= new Date().getTime()
    let tempoMancante= dataDomani-data

    let ore= Math.floor(tempoMancante%(1000*60*60*24)/ 1000*60*60);

    let minuti=Math.floor(tempoMancante%(1000*60*60*) / 1000*60);

    let secondi=Math.floor(tempoMancante%(1000*60* )/ 1000);
},1000)