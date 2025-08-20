const grillos = document.querySelectorAll (".grin")
const manzanas = document.querySelectorAll (".apple")
const contadorgrillos = document.querySelector("#contador-grillos")
const contadormanzanas = document.querySelector("#contador-manzanas")
const playAudio = document.querySelector("#play-audio")
const stopAudio = document.querySelector("#stop-audio")
const audioFondo = document.querySelector("#audio-fondo")
let totalgrillos = 0
let totalmanzanas = 0


grillos.forEach(function(grillo){
   
    grillo.addEventListener( 'click', function () {
        grillo.classList.add('desaparecer')
        totalgrillos++
        contadorgrillos.textContent= totalgrillos

    } )
  
 
} )

manzanas.forEach(function(manzana){
    manzana.addEventListener( 'click', function () {
        manzana.classList.add('desaparecer')
        totalmanzanas++
        contadormanzanas.textContent= totalmanzanas

    } )
})

const sol = document.querySelector('#misol'); 
sol.style.transition = 'transform .35s ease';

sol.addEventListener('mouseenter', () => {
  sol.style.transform = 'translateY(-90px) scale(1.5)';
});

sol.addEventListener('mouseleave', () => {
  sol.style.transform = 'translateY(-90px) scale(1)';
});



function reproducirAudio () {
    audioFondo.play()
}
playAudio.addEventListener("click", reproducirAudio)



function pausarAudio () {
   audioFondo.pause()
}
stopAudio.addEventListener("click", pausarAudio)