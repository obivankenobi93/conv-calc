
const byntousd = 0.354;
const byntoeur = 0.3331;
const usdtobyn = 2.8247;
const usdtoeur = 0.9408;
const eurtobyn = 3.0025;
const eurtousd = 1.0629;

let valbyn = document.getElementById('valbyn');
let valusd = document.getElementById('valusd');
let valeur = document.getElementById('valeur');

valbyn.addEventListener('input', (event)=> {
    valusd.value = event.target.value * byntousd;
    valeur.value = event.target.value * byntoeur;
})

valusd.addEventListener('input', (event)=> {
    valbyn.value = event.target.value * usdtobyn;
    valeur.value = event.target.value * usdtoeur;
})

valeur.addEventListener('input', (event)=> {
    valbyn.value = event.target.value * eurtobyn;
    valusd.value = event.target.value * eurtousd;
})




