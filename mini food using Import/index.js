import {data} from "./data.js";
import {navbar} from "./navbar.js"

let con = document.getElementById("container");

function display(maind){
  con.innerHTML=null;
  maind.forEach((el) => {
    let mdiv = document.createElement("div");
    mdiv.setAttribute('id',"mdiv")

    let image = document.createElement("img");
    image.src = el.img;

    let n = document.createElement("h2");
    n.innerText = el.name;

    let p = document.createElement("p");
    p.innerText = el.price;

    let btn =document.createElement("button");
    btn.innerText="Add to cart";
    // adding products to cart when user click on button this 
    // particular things gonna push on than array
    btn.addEventListener("click", function(){
        addtocart(el)
    })

    mdiv.append(image, n, p,btn);
    con.append(mdiv);
  
  });
};

display(data);

let cartarr= JSON.parse(localStorage.getItem("cart")) || [];
function addtocart(el){
    cartarr.push(el);
    localStorage.setItem("cart",JSON.stringify(cartarr))

}


let nav= document.getElementById('navbar')
nav.innerHTML=navbar();