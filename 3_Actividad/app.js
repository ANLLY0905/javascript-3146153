const grillos = document.querySelectorAll (".grin")
const manzanas = document.querySelectorAll (".apple")
const contadorgrillos = document.querySelector("#contador-grillos")
const contadormanzanas = document.querySelector("#contador-manzanas")
/* const crecesol = document.querySelector ("#misol") */
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

/* crecesol.addEventListener('mouseover', function () {
    crecesol.style.transform = 'translateY(-90px) scale(1.5)'
    crecesol.style.transition = 'transform 0.5s ease'
})

crecesol.addEventListener('mouseout', function () {
    crecesol.style.transform = 'translateY(-90px) scale(1)'
}) */

const sol = document.querySelector('#misol'); 
sol.style.transition = 'transform .35s ease';

sol.addEventListener('mouseenter', () => {
  sol.style.transform = 'translateY(-90px) scale(1.5)';
});

sol.addEventListener('mouseleave', () => {
  sol.style.transform = 'translateY(-90px) scale(1)';
});


