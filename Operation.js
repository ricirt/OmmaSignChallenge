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
