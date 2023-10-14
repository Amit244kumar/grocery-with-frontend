var img=document.getElementsByClassName("img")
var e=document.getElementsByClassName("name")
var price=document.getElementsByClassName("product-price")
var strike=document.getElementsByClassName("strike-price")
function Fruit()
{
    img[0].src='img/watermelon-1.webp'
    img[1].src='img/tomato-2.webp'
    img[2].src='img/coriander-3.webp'
    img[3].src='img/chicken-5.webp'
    img[4].src='img/badam-6.webp'
    img[5].src='img/egg-4.webp'
    
    e[0].innerHTML='watermelon'
    e[1].innerHTML='Tomato'
    e[2].innerHTML='coriander'
    e[3].innerHTML='chicken Breast'
    e[4].innerHTML='Badam'
    e[5].innerHTML='Egg'
   
    price[0].innerHTML='$6.67'
    price[1].innerHTML='$0.47'
    price[2].innerHTML='$1.34'
    price[3].innerHTML='$13.3'
    price[4].innerHTML='$16.3'
    price[5].innerHTML='$4.23'

    strike[0]=innerHTML='$99.00'
    strike[1]=innerHTML='$2.34'
    strike[2]=innerHTML='$3.2'
    strike[3]=innerHTML='$20.44'
    strike[4]=innerHTML='$40.4'
    strike[5]=innerHTML='$10.44'
}


function Flour()
{
    img[0].src='img/vetch-Seeds.webp'
    img[1].src='img/beetroot.webp'
    img[2].src='img/flower-mushroom.webp'
    img[3].src='img/coco-Cookies.webp'
    img[4].src='img/Bread.webp'
    img[5].src='img/butter-cookies.webp'
    
    e[0].innerHTML='Vetch Seeds'
    e[1].innerHTML='Beetroot'
    e[2].innerHTML='Flower mushroom'
    e[3].innerHTML='coco Cookies'
    e[4].innerHTML='Bread'
    e[5].innerHTML='Butter cookies'
   
    price[0].innerHTML='$9.64'
    price[1].innerHTML='$1.02'
    price[2].innerHTML='$1.35'
    price[3].innerHTML='$2.54'
    price[4].innerHTML='$2.14'
    price[5].innerHTML='$2.14'
   
    strike[0]=innerHTML=''
    strike[1]=innerHTML=''
    strike[2]=innerHTML=''
    strike[3]=innerHTML=''
    strike[4]=innerHTML=''
    strike[5]=innerHTML=''
   
}
function meat()
{
    img[0].src='img/chicken-5.webp'
    img[1].src='img/fish-curry.webp'
    img[2].src='img/Broccoli.webp'
    img[3].src='img/egg-4.webp'
    img[4].src='img/cucumber.webp'
    img[5].src='img/jamun-fruit.webp'
    
    e[0].innerHTML='chicken'
    e[1].innerHTML='fish curry'
    e[2].innerHTML='Broccoli'
    e[3].innerHTML='Egg'
    e[4].innerHTML='Cucumber'
    e[5].innerHTML='Jamun fruit'
   
    price[0].innerHTML='$2.64'
    price[1].innerHTML='$3.2'
    price[2].innerHTML='$2.3'
    price[3].innerHTML='$22.55'
    price[4].innerHTML='$3.14'
    price[5].innerHTML='$1.89'
   
    strike[0]=innerHTML=''
    strike[1]=innerHTML=''
    strike[2]=innerHTML=''
    strike[3]=innerHTML=''
    strike[4]=innerHTML=''
    strike[5]=innerHTML=''
   
}
function vege()
{
    img[0].src='img/vetch-Seeds.webp'
    img[1].src='img/coriander-3.webp'
    img[2].src='img/vetch-Seeds.webp'
    img[3].src='img/coco-Cookies.webp'
    img[4].src='img/Broccoli.webp'
    img[5].src='img/cucumber.webp'
    
    e[0].innerHTML='Vetch Seeds'
    e[1].innerHTML='coriander'
    e[2].innerHTML='vetch seeds'
    e[3].innerHTML='coco Cookies'
    e[4].innerHTML='Brocoli'
    e[5].innerHTML='cucumber'
   
    price[0].innerHTML='$2.64'
    price[1].innerHTML='$6.2'
    price[2].innerHTML='$4.35'
    price[3].innerHTML='$22.43'
    price[4].innerHTML='$7.54'
    price[5].innerHTML='$2.4'
   
    strike[0]=innerHTML=''
    strike[1]=innerHTML=''
    strike[2]=innerHTML=''
    strike[3]=innerHTML=''
    strike[4]=innerHTML=''
    strike[5]=innerHTML=''
   
}






// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countDown").innerHTML = days + " : " + hours + " : "
  + minutes + " : " + seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countDown").innerHTML = "EXPIRED";
  }
}, 1000);


// var li=document.getElementsByClassName('list-item')
// while(true){
//   setInterval(function(){
//     li[0].style.left="-300px"
//     li[1].style.left="0px"
//     li[2].style.left="300px"
//     li[3].style.left="600px"
//     li[4].style.left="900px"
//     li[5].style.left="1100px"
//     li[0].style.left="1400px"
//   },2000)
// }

