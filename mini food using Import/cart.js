import { navbar } from "./navbar.js";
console.log(navbar);

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();


let checkout= document.getElementById("btn");
checkout.addEventListener("click", function(){



  
})


let cartarr = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartarr);

let con = document.getElementById("container");

function display(maind) {
  con.innerHTML = null;
  maind.forEach((el, index) => {
    let mdiv = document.createElement("div");
    mdiv.setAttribute("id", "mdiv");

    let image = document.createElement("img");
    image.src = el.img;

    let n = document.createElement("h2");
    n.innerText = el.name;

    let p = document.createElement("p");
    p.innerText = el.price;

    let btn = document.createElement("button");
    btn.innerText = "Remove";
    // adding products to cart when user click on button this
    // particular things gonna push on than array
    btn.addEventListener("click", function () {
      deledata(index);
    });

    mdiv.append(image, n, p, btn);
    con.append(mdiv);
  });
}

display(cartarr);

function deledata(index) {
  cartarr.splice(index, 1);
  //after deleting the data just  basic updating the local storage
  localStorage.setItem("cart", JSON.stringify(cartarr));
  display(cartarr);
}

