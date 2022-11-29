const ko = document.getElementById('ko');
const papir = document.getElementById('papir');
const ollo = document.getElementById('ollo');
const gepKo = document.getElementById('gep_ko');
const gepPapir = document.getElementById('gep_papir');
const gepOllo = document.getElementById('gep_ollo');
const felh = document.getElementById('felh_pont');
const gep = document.getElementById('gep_pont');
const gomb = document.getElementById('ujraindit');
const bezaras = document.getElementById('bezaras');

let felh_pont = 0;
let gep_pont = 0;


function ertekeles (felhasznalo){
    var szamitogep = veletlen()
    if(szamitogep === 'ko'){
        gepKo.setAttribute("class", "nemUres");
        gepPapir.setAttribute("class", "ures");
        gepOllo.setAttribute("class", "ures");
        
    }
    else if(szamitogep === 'papir'){
        gepKo.setAttribute("class", "ures");
        gepPapir.setAttribute("class", "nemUres");
        gepOllo.setAttribute("class", "ures");
    }
    else {
        gepKo.setAttribute("class", "ures");
        gepPapir.setAttribute("class", "ures");
        gepOllo.setAttribute("class", "nemUres");
    }

    if((felhasznalo === 'papir' && szamitogep === 'ollo') || (felhasznalo === 'ollo' && szamitogep === 'ko') || (felhasznalo === 'ko' && szamitogep === 'papir')) gep_pont++;
    else if((felhasznalo === 'papir' && szamitogep === 'ko') || (felhasznalo === 'ollo' && szamitogep === 'papir') || (felhasznalo === 'ko' && szamitogep === 'ollo')) felh_pont++;
    felh.innerHTML = felh_pont;
    gep.innerHTML = gep_pont;
    console.log(felh_pont);
    console.log(gep_pont);
    
}

function valasztas(ertek){
    if (ertek==='ko'){
        ertekeles('ko')
    }
    else if (ertek==='papir'){
        console.log("Papír lett kiválasztva")
        ertekeles('papir')
    }
    else{
        console.log("Olló lett kiválasztva")
        ertekeles('ollo')
    }
}

function megnyom(){
    felh_pont = 0;
    gep_pont = 0;
    felh.innerHTML = felh_pont;
    gep.innerHTML = gep_pont;
    alert("A játék újraindítva.")
}

function kattint(){
    ko.addEventListener('click',()=>valasztas('ko'));
    papir.addEventListener('click',()=>valasztas('papir'));
    ollo.addEventListener('click',()=>valasztas('ollo'));
    gomb.addEventListener('click',()=>megnyom());
    bezaras.addEventListener('click',()=>bezar());
}

function veletlen(){
    let szam = Math.floor(Math.random() * 3)
    var lehetosegek = ["ko","papir","ollo"]
    return lehetosegek[szam]
}

function bezar(){
    close();
  }


kattint();
