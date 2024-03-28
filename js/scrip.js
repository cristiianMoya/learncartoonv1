let=progresocirculo=document.getElementById('progreso');
let porcentage=document.getElementById('porcentage');
let cantidad=0;
let cantidad2=630;
let tiempo1 = setInterval(() =>{
    cantidad +=1;
    let valores  =Math.ceil((cantidad2-=6.3));
    porcentage.textContent = cantidad +'%';
    progresocirculo.style.strokeDashoffset = `${valores}`;
    if(cantidad >=100){
        clearInterval(tiempo1);
    }
}, 80);

// pendiente ooptimizar el codigo

let=progresocirculo2=document.getElementById('progreso1');
let porcentage1=document.getElementById('porcentage1');
let cantidad3=0;
let cantidad4=630;
let tiempo2 = setInterval(() =>{
    cantidad3 +=1;
    let valor  =Math.ceil((cantidad4-=6.3));
    porcentage1.textContent = cantidad3 +'%';
    progresocirculo2.style.strokeDashoffset = `${valor}`;
    if(cantidad3 >=100){
        clearInterval(tiempo2);
    }
}, 80);

