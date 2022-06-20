

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
    



// list hotel js

   function hotellist(city1){
     var city2=" ";
     city2 =  city1;
     console.log(city2);
     let loaction = `https://travel-advisor.p.rapidapi.com/locations/search?query=${city2}&limit=30&offset=0&units=km&location_id=1&currency=USD&sort=relevance&lang=en_Delhi`;    
  console.log(loaction);



console.log("city" + city2);
const options = {
     method: 'GET',
     headers: {
          'X-RapidAPI-Key': '87bba50f70mshfabbd820e4160ddp101ebejsnccbf1bb41df7',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
     }
};


fetch(loaction, options)
     .then(response => response.json())
     .then((response)=>{
    let hotel = response.data;
    let html = "";
   hotel.map((values)=>{

    let img1 = values.result_object.photo.images.medium.url;
    let hotelname = values.result_object.name;
    let hoteladress = values.result_object.address;
    let hotelrating = values.result_object.rating;
    // console.log(hoteladress);
    // console.log(img1);
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
  let cont = document.getElementById("contentlist");
  cont.innerHTML = html;
  console.log(response.data)





}).catch(err => console.error(err));





}


