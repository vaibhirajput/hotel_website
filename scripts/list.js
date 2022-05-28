let lv = document.getElementById("listbtnview");
let lm = document.getElementById("listbtnmap");
let cont = document.getElementById("contentlist");
let mapimage = document.getElementById("map");
lv.onclick = listbtn1;
lm.onclick = listbtn2;

function listbtn1(){
        lv.style.backgroundColor = "rgb(0, 169, 236)";
        lm.style.backgroundColor = "#e0e0e0";
        cont.style.display = "grid";
        mapimage.style.display = "none";

    }


function listbtn2(){
        lm.style.backgroundColor = "rgb(0, 169, 236)";
        lv.style.backgroundColor = "#e0e0e0";
        cont.style.display = "none";
        mapimage.style.display = "block";
      
    }

    
