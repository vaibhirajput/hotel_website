

// select hotel api photo fetching!!!

var photoid = location.search;
let shardphotolink = `https://travel-advisor.p.rapidapi.com/photos/list${photoid}&currency=USD&limit=50&lang=en_US`;
//  let shardphotolink = `https://travel-advisor.p.rapidapi.com/photos/list?location_id=306957&currency=USD&limit=50&lang=en_US`;
console.log(photoid);
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e7ae583bdfmsh41b446c1545fc40p1a2305jsn3674e5172405',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};

fetch(shardphotolink, options)
    .then(response => response.json())
    .then((response) => {
        var hotelphoto = response.data;
        console.log(hotelphoto)

        var sliderhotelimg = " ";
        hotelphoto.map((values) => {
            let sharedhotel = values.images.large.url;
            sliderhotelimg += ` 
    <div class="slider" >
    <img src=${sharedhotel}
        alt="" class="sliderimage">
    </div> `

        })

        document.getElementById("containerslider").innerHTML = sliderhotelimg;
        var allsilders = document.getElementsByClassName("slider");
        let sliderarr = new Array(allsilders);

       
    })

    .catch(err => console.error(err));



 //    slider old function!!!
 
 var countnext = 0;

 
 function slidercontrolnext() {
     
     if (countnext <= 49) {
        
        var image = document.getElementsByClassName("slider");
        for (let y of image) {
            y.style.display = "none";
        }
        countnext++;
        image[countnext].style.display = "block";
        // console.log(countnext);
         
     }
     if (countnext >= 49) {
         countnext = -1;
     }


 }
 setInterval(slidercontrolnext,5000);

 function slidercontrolpre() {
     if (countnext >= 1) {
        var image = document.getElementsByClassName("slider");
        for (let y of image) {
            y.style.display = "none";
            
        }
        countnext--;
        image[countnext].style.display = "block";
        // console.log(countnext);
         
     }

     if (countnext <= 0) {
         countnext =0;
     }

 }



//  sliderfunction(number);

//  function sliderfunction(number1) {
//      var image = document.getElementsByClassName("slider");
//      for (let y of image) {
//          y.style.display = "none";
//      }

//      image[number1].style.display = "block";

//  }



//  function slidercontrolnext() {


//  }


