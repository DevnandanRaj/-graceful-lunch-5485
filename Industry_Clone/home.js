
    const API="https://fakestoreapi.com/products";

    let containerEl = document.querySelector(".container");
    let filterForm = document.querySelector("form");
    let fromInput = document.getElementById("from");
    let fetchedData = [];
    fetch(API)
      .then((request) => {
        return request.json();
      })
      .then((data) => {
        fetchedData = data;
        DisplayProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
    function DisplayProducts(data) {
      containerEl.innerHTML = "";
      data.forEach((element) => {
        let productCard = document.createElement("div");
        productCard.setAttribute("class", "card");

        let img = document.createElement("img");
        img.setAttribute("src", element.image);

        let title = document.createElement("h2");
        title.innerText = element.title;

        let desc = document.createElement("p");
        desc.innerText = element.description;

        let price = document.createElement("h4");
        price.textContent = element.price;

        productCard.append(img, title, desc, price);
        containerEl.append(productCard);
      });
    }