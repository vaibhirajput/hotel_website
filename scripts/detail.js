// slider js start
let number = 0;

let countnext =0;
function slidercontrolnext(){ 
if(countnext<=2){
    countnext++;
}

if(countnext <=2){
       sliderfunction(countnext);
       console.log(countnext); 
   }
if(countnext >=2){
    countnext=2;
}
}
function slidercontrolpre(){
    if(countnext>=1){

        countnext--;
    }

    if(countnext >=0){
           sliderfunction(countnext);
           console.log(countnext);
           
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
// End of slider js