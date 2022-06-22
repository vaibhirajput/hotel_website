// slider js start
// let number = 0;

// let countnext =0;
// function slidercontrolnext(){ 
// if(countnext<=2){
//     countnext++;
// }

// if(countnext <=2){
//        sliderfunction(countnext);
//        console.log(countnext); 
//    }
// if(countnext >=2){
//     countnext=2;
// }
// }
// function slidercontrolpre(){
//     if(countnext>=1){

//         countnext--;
//     }

//     if(countnext >=0){
//            sliderfunction(countnext);
//            console.log(countnext);
           
//        }

// }



// sliderfunction(number);

// function sliderfunction(number1) {
//     let image = document.getElementsByClassName("slider");
//     for (let y of image) {
//         y.style.display = "none";
//     }
    
//     image[number1].style.display = "block";

// }
// End of slider js



// fetching api 
//id=2233968
var photoid = location.search;
//let shardphotolink = `https://travel-advisor.p.rapidapi.com/photos/list?location_${photoid}currency=USD&limit=50&lang=en_US`;
//  let shardphotolink = `https://travel-advisor.p.rapidapi.com/photos/list?location_id=2233968&currency=USD&limit=50&lang=en_US`;
console.log(photoid)
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e7ae583bdfmsh41b446c1545fc40p1a2305jsn3674e5172405',
		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
	}
};

fetch('https://travel-advisor.p.rapidapi.com/photos/list?location_id=2233968&currency=USD&limit=50&lang=en_US', options)
	.then(response => response.json())
	.then((response) => {
    let hotelphoto = response.data;
    console.log(hotelphoto)
    
     var sliderhotelimg = " ";

     
    hotelphoto.map((values)=>{
    let sharedhotel = values.images.medium.url;
    let hotelid2 = values.linked_reviews.location_id;
    console.log(hotelid2);  
    // console.log(sharedhotel);

    if(photoid == hotelid2){
     console.log(hotelid2);   
    sliderhotelimg += ` 
    <div class="slider">
    <img src=${sharedhotel}
        alt="" class="sliderimage">
</div> `
    }
    })

     document.getElementById("containerslider").innerHTML = sliderhotelimg;
    
    })
	// .catch(err => console.error(err));


    

// let kk = `https://travel-advisor.p.rapidapi.com/hotel-filters/list?location_id=293919&adults=1&rooms=1&nights=2&lang=en_US&order=asc&currency=USD&sort=recommended`;
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '87bba50f70mshfabbd820e4160ddp101ebejsnccbf1bb41df7',
// 		'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
// 	}
// };

// fetch(kk, options)
// 	.then(response => response.json())
// 	.then(response => console.log(response.data))
// 	.catch(err => console.error(err));