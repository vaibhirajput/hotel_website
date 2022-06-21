


function hide(){
     let hide = document.getElementById("hide1");
     let less = document.getElementById("viewbtn");

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
 let gg = document.getElementById("g1");
 gg.addEventListener( "click" , goa);
   console.log(gg);

   



 function hotelplace(hot){
let city2 = hot;


let locat = `https://travel-advisor.p.rapidapi.com/locations/search?query=${city2}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_Delhi`;    

const options = {
  method: 'GET',
  headers: {
       'X-RapidAPI-Key': '87bba50f70mshfabbd820e4160ddp101ebejsnccbf1bb41df7',
       'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};


fetch(locat, options)
  .then(response => response.json())
  .then((response)=>{
   let hotel = response.data;
   let html = "";
  console.log(hotel);

     hotel.map((values)=>{
  
      let img1 = values.result_object.photo.images.medium.url;
      let hotelname = values.result_object.name;
      let hoteladress = values.result_object.address;
      let hotelrating = values.result_object.rating;
       console.log(hoteladress);
       console.log(img1);
      html += `
      <div class="grid-item">   
          <img src=${img1} alt=""
              class="hotel">
          <div class="rating">
              <h2>${hotelname}</h2>
              <div class="stars">
                 <span >${hotelrating}</span>
                  <span class="star checked">&#9733;</span>
                  
                  
                  <br>
                  <br>
                  <p>${hoteladress}</p>
              </div>
  
          </div>
      
  
      </div>`
  
     })

     location.href=html;
     
     document.getElementById("contentlist").innerHTML = html;
    console.log(response.data)
  
  
    })

// }).catch(err => console.error(err));

}

 




// var one = " ";
// let hh;
// function delhi(){
//   return  one = "delhi";
  
//   }

//   function goa(){
//     return  one = 'goa';
    
    
//     }

//   let hyderabad =  ()=>{
//      one = "hyderabad"; 
//     //  console.log( one);
//         }
// console.log(one);
// //  hh = delhi();
// //  hh = goa()
// //  hh= hyderabad();
//  console.log(hyderabad());

// // export default hh;
