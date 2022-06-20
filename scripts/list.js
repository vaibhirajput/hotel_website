

let lv = document.getElementById("listbtnview");
let lm = document.getElementById("listbtnmap");
let cont = document.getElementById("contentlist");
let mapimage = document.getElementById("map");
lv.addEventListener("click", listbtn1);
lm.addEventListener("click", listbtn2);

function listbtn1() {
  lv.style.backgroundColor = "rgb(0, 169, 236)";
  lm.style.backgroundColor = "#e0e0e0";
  cont.style.display = "grid";
  mapimage.style.display = "none";
}

function listbtn2() {
  lm.style.backgroundColor = "rgb(0, 169, 236)";
  lv.style.backgroundColor = "#e0e0e0";
  cont.style.display = "none";
  mapimage.style.display = "block";
}
 console.log

//   let loaction = `https://travel-advisor.p.rapidapi.com/locations/search?query=${city2}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_Delhi`;    
  



// console.log("city" + city2);
// const options = {
//      method: 'GET',
//      headers: {
//           'X-RapidAPI-Key': '87bba50f70mshfabbd820e4160ddp101ebejsnccbf1bb41df7',
//           'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
//      }
// };


// fetch(loaction, options)
//      .then(response => response.json())
//      .then((response)=>{
//     let hotel = response.data;
//     let html = "";
//    hotel.map((values)=>{

//     let img1 = values.result_object.photo.images.medium.url;
//     let hotelname = values.result_object.name;
//     let hoteladress = values.result_object.address;
//     let hotelrating = values.result_object.rating;
//     // console.log(hoteladress);
//     // console.log(img1);
//     html += `
//     <div class="grid-item">   
//         <img src=${img1} alt=""
//             class="hotel">
//         <div class="rating">
//             <h2>${hotelname}</h2>
//             <div class="stars">
//                <span >${hotelrating}</span>
//                 <span class="star checked">&#9733;</span>
                
                
//                 <br>
//                 <br>
//                 <p>${hoteladress}</p>
//             </div>

//         </div>
    

//     </div>`

//    })
//     document.getElementById("contentlist").innerHTML = html;
//   console.log(response.data)





// }).catch(err => console.error(err));







