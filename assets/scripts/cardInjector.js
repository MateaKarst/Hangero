import { createGenderCard, createHomeCard } from "./createCard.js";
import { womenCards, menCards, childrenCards, homeCard } from "./cards.js";
const womenWrapper = document.querySelector("#womenWrapper")
const menWrapper = document.querySelector("#menWrapper")
const childWrapper = document.querySelector("#childWrapper")
const homeCardWrapper = document.querySelector(".flashSalesCards")


//  ------ home cards injection ------
if(homeCardWrapper){
    homeCard.forEach((card) => {
        createHomeCard(card.img,card.price,card.prevPrice,card.itemLeft,homeCardWrapper)
    })
}

// ------ gender cards injection ------
// if the woman wrapper is detected, then the code will be injected
if(womenWrapper){
    womenCards.forEach((card) => {
        createGenderCard(card.img,card.title,card.desc, card.price,card.prevPrice, womenWrapper)
    })
}

// if the man wrapper is detected, then the code will be injected
if(menWrapper){
    menCards.forEach((card) => {
        createGenderCard(card.img,card.title,card.desc, card.price,card.prevPrice, menWrapper)
    })
}

// if the child wrapper is detected, then the code will be injected
if(childWrapper){
    childrenCards.forEach((card) => {
        createGenderCard(card.img,card.title,card.desc, card.price,card.prevPrice, childWrapper)
    })
}