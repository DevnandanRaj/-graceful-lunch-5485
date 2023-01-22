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
let arr = [];
let API = "https://63c66b68d307b7696738a8cf.mockapi.io/products"
    async function FetchData(){
      try{
        let request=await fetch(API);
        let data = await request.json();

        arr=data
        console.log(data);
        DisplayProduct(data)
      }catch(err){
        console.log(err)
      }
}
    FetchData()
    let CartArr = JSON.parse(localStorage.getItem("cart"))||[];

    let Container = document.getElementById("product-container")

    function DisplayProduct(data){
      

      Container.innerHTML = "";
      data.forEach((product,i) => {
        let card = document.createElement("div");
        let image = document.createElement("img");
        let brand = document.createElement("h3");
        let category = document.createElement("p");
        let details = document.createElement("p");
        let price = document.createElement("h4");
        let add_to_cart = document.createElement("button");

       
        image.src = product.image;
        brand.textContent = product.name;
        category.textContent = product.category;
        price.textContent = `₹${product.price}`;
        details.textContent = product.title;
        add_to_cart.textContent = "Add to Cart";

        add_to_cart.addEventListener("click",()=>{
            if(checkDuplicate(product)){
              alert("Product Already in Cart")
            }else{
              CartArr.push({...product,quantity:1});
              localStorage.setItem("cart",JSON.stringify(CartArr));
              alert("Product Added To Cart")
            }
        })


        card.append(image,brand,price,details,category,add_to_cart);
        Container.append(card);

      });
    
 

    }
   
   function checkDuplicate(product){
    for(let i=0; i<CartArr.length;i++){

      if(CartArr[i].id===product.id){
        return true;
      
      }
    }
    return false;
}
    let inpbox=document.querySelector(".search")
    

    inpbox.addEventListener("submit", (e) => {
        e.preventDefault();
       
        let searchParams = inpbox.search.value;
  
        let filtered =  arr.filter((element) => {
          if (
            element.name.toUpperCase().includes(searchParams.toUpperCase()) ===
            true
          ) {
            return true;
          } else {
            return false;
          }
        });
        DisplayProduct(filtered);
      });