


function hide(){
     let hide = document.getElementById("hide1");
     let less = document.getElementById("viewbtn");
      
// city card view more and view less javascript!!!
    if(hide.style.display == "block"){
     hide.style.display = "none";
     less.innerHTML= "View More";
     return;
     
     
    }
   
    else if ( hide.style.display = "none")
     {
      hide.style.display = "block";
       less.innerHTML= "View Less";
       return;
     
    }
  
}
 