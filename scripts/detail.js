let number = 0;

let countnext =0;
function slidercontrolnext(){
countnext++;
if(countnext <3){
       sliderfunction(countnext);
       console.log(countnext);
       
   }
if(countnext >=3){
    countnext=3;
}
}
let countpre =2;
function slidercontrolpre(){
    if(countpre >=0){
           sliderfunction(countpre);
           console.log(countpre);
           countpre--;
       }

       if(countpre <0){
        countnext=0;
    
    }
}



sliderfunction(number);

function sliderfunction(number1) {
    let image = document.getElementsByClassName("slider");
    for (let y of image) {
        y.style.display = "none";
    }
    
    image[number1].style.display = "block";

}