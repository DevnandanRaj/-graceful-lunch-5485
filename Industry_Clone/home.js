let imgtag = document.createElement("img");
let slidediv = document.getElementById("slideshow");
slidediv.append(imgtag);
let currentIndex = 0;
// Use the following data for slideshow
var movieImages = [
    "https://static3.industrybuying.com/homepage/1650877078AGRIPRO.png",
    "https://static3.industrybuying.com/homepage/1673953632Desktop-524xx334-Green-Soul-new.jpg",
    "https://static3.industrybuying.com/homepage/1667890944Industrial-buying-524x334-4.jpg",
    "https://static3.industrybuying.com/homepage/1671432246CP-PLUS-DESKTOP-(524X334).png",
];
slideshowFun(movieImages);
function slideshowFun(images) {
  imgtag.setAttribute("src",images[currentIndex])
  if (currentIndex == images.length - 1) {
    currentIndex = 0;
  }
  else {
    currentIndex++;
  }
}

window.addEventListener("load", function () {
  // add event-listeners;
  setInterval(slideshowFun, 2000, movieImages);
});


//products api
