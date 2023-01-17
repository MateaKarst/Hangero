import { cartCards } from "./cards.js";
// Card wrapper, we will use this to inject html code in it
const cardWrapper = document.querySelector(".cardItems");
const qty = document.querySelector(".totalQty");
const totalPrice = document.querySelector(".totalPrice");
const orderList = document.querySelector(".individualSum");
const giftCheck = document.querySelector("#giftCheckbox");
const deliveryCheck = document.querySelector("#deliveryCheckbox");

// ----------- Card creation -------------

// js will repeat this loop for each array inside our "cards" object
cartCards.forEach((card) => {
  // calling the function
  addCard(card.img, card.title, card.desc, card.price, card.prevPrice);
});

// this function will help us to inject cartCards in the html doc
function addCard(img, title, desc, price, prevPrice, id = "itemCard") {
  // for each card he will print this code below, changing the informations
  let code = `
        <div class="shopItem" id="${id}">
                    <div class="itemThumbnail">
                        <img src="${img}" alt="">
                    </div>
                    <div class="product">
                        <div class="productTitle"><h5>${title}</h5></div>
                        <div class="productDesc"><p>${desc}</p></div>
                        <div class="productInfo"> 
                            <div class="priceWrapper">
                                <div class="price">${price}</div>
                                <div class="prevPrice price">${prevPrice}</div>
                            </div>
                            <div class="iconWrapper">
                                <button><i class="fi fi-rr-comment-alt"></i></button>
                                <button><i class="fi fi-rr-star"></i></button>
                                <button><i class="fi fi-rr-trash"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
        `;
  // everytime he will inject the new cartCards in the html
  cardWrapper.innerHTML += code;
}

// ------------ order section ----------
// using .lenght to know whow many item are in the array
const totalQty = cartCards.length;
qty.innerHTML += totalQty;

//total of the price
let price = []; // will store each price
cartCards.forEach((card) => {
  price = [...price, card.price];
});

// using reduce to get the total of the array
const total = price.reduce((acc, val) => acc + val, 0);

// ----------order list---------

cartCards.forEach((card) => {
  addOrder(card.title, card.price);
});

// adding the product in the list
function addOrder(title, price, id = "shopItem") {
  let code = `
  <li class="listItem" id="${id}">
    <span class="itemName">${title}</span>
    <div class="itemDetails">
      <span class="itemPrice price">${price}</span>
    </div>
  </li>`;
  orderList.innerHTML += code;
}

// checkBox check
let isGifted = false;
let giftPrice = 0;
giftCheck.addEventListener("change", (e) => {
  isGifted = e.target.checked;

  const gift = {
    idCard: "giftCard",
    idOrder: "giftOrder",
    img: "https://img.freepik.com/free-vector/3d-gift-box-wrapped-golden-ribbon_173207-1906.jpg?w=826&t=st=1673639494~exp=1673640094~hmac=6d98d79a01b82828c1b1504c3752d735a637a8dc0d6c279a198d4bbe80784c54",
    title: "Gift",
    desc: "All your items will be deliverd as a gift",
    price: 5,
    prevPrice: "",
  };

  //injecting the gift option in the other cards
  if (isGifted === true) {
    addCard(
      gift.img,
      gift.title,
      gift.desc,
      gift.price,
      gift.prevPrice,
      gift.idCard
    );
    addOrder(gift.title, gift.price, gift.idOrder);
    giftPrice = gift.price;
  } else {
    const giftCard = document.querySelector("#giftCard");
    const giftOrder = document.querySelector("#giftOrder");
    giftCard.remove();
    giftOrder.remove();
    giftPrice = 0;
  }
});

// checkBox check
let isShiped = false;
let shippingPrice = 0;
deliveryCheck.addEventListener("change", (e) => {
  isShiped = e.target.checked;

  const shipping = {
    idCard: "shipCard",
    idOrder: "shipOrder",
    img: "https://img.freepik.com/premium-vector/free-shipping-sticker-free-delivery-badge-with-truck-vector-isolated-background-eps-10_399089-2425.jpg?w=826",
    title: "delivery",
    desc: "Fast delivery",
    price: 5,
    prevPrice: "",
  };

  //injecting the gift option in the other cards
  if (isShiped === true) {
    addCard(
      shipping.img,
      shipping.title,
      shipping.desc,
      shipping.price,
      shipping.prevPrice,
      shipping.idCard
    );
    addOrder(shipping.title, shipping.price, shipping.idOrder);
    shippingPrice = shipping.price;
  } else {
    const shipCard = document.querySelector("#shipCard");
    const shipOrder = document.querySelector("#shipOrder");
    shipCard.remove();
    shipOrder.remove();
    shippingPrice = 0;
  }
});

let totalWith = [total, giftPrice, shippingPrice];
totalPrice.innerHTML = totalWith.reduce((acc, val) => acc + val, 0);

addEventListener("change", () => {
  let totalWith = [total, giftPrice, shippingPrice];
  totalPrice.innerHTML = totalWith.reduce((acc, val) => acc + val, 0);
});
