class Product {
  constructor(productName, productDescription, productImage, productPrice) {
    this.productName = productName;
    this.productDescription = productDescription;
    this.productImage = productImage;
    this.productPrice = productPrice;
  }
}

var list = [
  new Product(
    "Fruit Salad",
    "Fruit salad is a dish consisting of various kinds of fruit, sometimes served in a liquid, either their own juices or a syrup.",
    "images/fruitSalads.png",
    "20$"
  ),
  new Product(
    "Noodle",
    "Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.",
    "images/noodle.png",
    "15$"
  ),
  new Product(
    "Chicken",
    "Greek-inspired chicken skewers with lots of flavor",
    "images/chicken.png",
    "30$"
  ),
  new Product("Chesecake", null, "images/chesecake.jpg", "20$"),
  new Product("Pancakes", null, "images/pancakes.jpg", "30$"),
  new Product("Brownie", null, "images/brownieWithRaspery.jpg", "40$"),
  new Product("Tomato Pizza", null, "images/pizza_tomato.png", "40$"),
  new Product("Pepperoni Pizza", null, "images/pizza_pepperoni.png", "50$"),
];


function firstStructure() {
  var counter = 0;
  var animate;
  if (document.body.contains(document.querySelector(".wrapper"))) {
    document.querySelector(".wrapper").remove();
  }
  if (document.body.contains(document.querySelector(".starting-screen"))){
  document.querySelector(".starting-screen").remove();
}
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.appendChild(wrapper);
  wrapper.style.backgroundImage = "url('/images/Background.jpg')";

  var food_price = document.createElement("div");
  food_price.className = "food-price";
  var priceText = document.createElement("p");
  priceText.className = "price";
  food_price.appendChild(priceText);
  var priceValue = document.createElement("p");
  priceValue.className = "food-pricee";
  food_price.appendChild(priceValue);

  var foodContent = document.createElement("div");
  foodContent.className = "food-content";
  var header = document.createElement("h1");
  header.className = "food-header";
  foodContent.appendChild(header);
  var image = document.createElement("img");
  image.className = "food-image";
  foodContent.appendChild(image);

  var description = document.createElement("div");
  description.className = "food-description";

  wrapper.appendChild(food_price);
  wrapper.appendChild(foodContent);
  wrapper.appendChild(description);

  animate = function () {
    priceText.innerHTML = "price :";
    header.innerHTML = list[counter].productName;
    priceValue.innerHTML = list[counter].productPrice;
    image.src = list[counter].productImage;
    description.innerHTML = list[counter].productDescription;

    if (counter == 2) {
      clearInterval(animate);
      counter = 0;
    } else counter++;
  };
  animate();
  setInterval(animate, 4000);
}



function secondStructure() {
  if (document.body.contains(document.querySelector(".wrapper"))) {
    document.querySelector(".wrapper").remove();
  }
  var wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  document.body.appendChild(wrapper);
  wrapper.style.backgroundImage = "url('/images/bg.jpg')";
  //first desset Dom
  var horizontal = document.createElement("div");
  horizontal.className = "horizontal";

  var firstDessert = document.createElement("div");
  firstDessert.className = "first-dessert";

  var dessertFirstHeader = document.createElement("div");
  dessertFirstHeader.className = "dessert-header";
  var dessertFirstHeaderText = document.createElement("h1");
  dessertFirstHeader.appendChild(dessertFirstHeaderText);
  firstDessert.appendChild(dessertFirstHeader);

  var dessertImage = document.createElement("div");
  dessertImage.className = "dessert-image";
  var firstImage = document.createElement("img");
  dessertImage.appendChild(firstImage);
  firstDessert.appendChild(dessertImage);

  var dessertFirstPrice = document.createElement("div");
  dessertFirstPrice.className = "dessert-price";
  var dessertPriceText = document.createElement("h1");
  dessertFirstPrice.appendChild(dessertPriceText);
  firstDessert.appendChild(dessertFirstPrice);

  //second dessert Dom
  var secondDessert = document.createElement("div");
  secondDessert.className = "second-dessert";

  var dessertSecondHeader = document.createElement("div");
  dessertSecondHeader.className = "dessert-header";
  var dessertSecondHeaderText = document.createElement("h1");
  dessertSecondHeader.appendChild(dessertSecondHeaderText);
  secondDessert.appendChild(dessertSecondHeader);

  var dessertSecondPrice = document.createElement("div");
  dessertSecondPrice.className = "dessert-price";
  var dessertSecondPriceText = document.createElement("h1");
  dessertSecondPrice.appendChild(dessertSecondPriceText);
  secondDessert.appendChild(dessertSecondPrice);

  var dessertSecondImage = document.createElement("div");
  dessertSecondImage.className = "dessert-image";
  var secondImage = document.createElement("img");
  dessertSecondImage.appendChild(secondImage);
  secondDessert.appendChild(dessertSecondImage);

  horizontal.appendChild(secondDessert);
  //third dessert dom

  var thirdDessert = document.createElement("div");
  thirdDessert.className = "third-dessert";

  var dessertThirdHeader = document.createElement("div");
  dessertThirdHeader.className = "dessert-header";
  var dessertThirdHeaderText = document.createElement("h1");
  dessertThirdHeader.appendChild(dessertThirdHeaderText);
  thirdDessert.appendChild(dessertThirdHeader);

  var dessertThirdPrice = document.createElement("div");
  dessertThirdPrice.className = "dessert-price";
  var dessertThirdPriceText = document.createElement("h1");
  dessertThirdPrice.appendChild(dessertThirdPriceText);
  thirdDessert.appendChild(dessertThirdPrice);

  var dessertThirdImage = document.createElement("div");
  dessertThirdImage.className = "dessert-image";
  var thirdImage = document.createElement("img");
  dessertThirdImage.appendChild(thirdImage);
  thirdDessert.appendChild(dessertThirdImage);

  horizontal.appendChild(firstDessert);
  horizontal.appendChild(secondDessert);
  horizontal.appendChild(thirdDessert);

  dessertFirstHeader.innerHTML = list[3].productName;
  dessertFirstPrice.innerHTML = list[3].productPrice;
  firstImage.src = list[3].productImage;

  dessertSecondHeader.innerHTML = list[4].productName;
  dessertSecondPrice.innerHTML = list[4].productPrice;
  secondImage.src = list[4].productImage;

  dessertThirdHeader.innerHTML = list[5].productName;
  dessertThirdPrice.innerHTML = list[5].productPrice;
  thirdImage.src = list[5].productImage;

  document.querySelector(".wrapper").appendChild(horizontal);
}