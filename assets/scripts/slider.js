const productContainers = document.querySelector(".flashSalesCards");
const nxtBtn = document.querySelector(".nxtBtn");
const preBtn = document.querySelector(".preBtn");

// get the boundary of the container
let containerDimensions = productContainers.getBoundingClientRect();
// get the dimention of the width
let containerWidth = containerDimensions.width;

nxtBtn.addEventListener("click", () => {
    productContainers.scrollLeft += containerWidth;
});

preBtn.addEventListener("click", () => {
    productContainers.scrollLeft -= containerWidth;
});
