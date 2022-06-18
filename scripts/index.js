

function hide(){
     let hide = document.getElementById("slider1");
     let less = document.getElementById("viewbtn");
    if(hide.style.display == "none"){
     hide.style.display = "flex";
     less.innerHTML= "View less"
    }
    else{
         hide.style.display = "none";
         less.innerHTML= "View more"
    }
}