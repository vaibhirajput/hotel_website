   

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

fetch(shardphotolink , options)
	.then(response => response.json())
	.then((response) => {
    let hotelphoto = response.data;
    console.log(hotelphoto)
    
    var sliderhotelimg = " ";
    hotelphoto.map((values)=>{
    let sharedhotel = values.images.medium.url;
    sliderhotelimg += ` 
    <div class="slider">
    <img src=${sharedhotel}
        alt="" class="sliderimage">
    </div> `
    
     })
     console.log(hotelphoto.length);
     document.getElementById("containerslider").innerHTML = sliderhotelimg;
    
    })
	.catch(err => console.error(err));
      
    

    

