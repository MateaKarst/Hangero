// cards that are used in gender pages
export function createGenderCard(img, title, desc, price, prevPrice, wrapper) {
  // for each card he will print this code below, changing the informations
  let code = `
              <div class="shopItem">
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
                                  </div>
                              </div>
                          </div>
                      </div>
              `;
            //   console.log(wrapper)
  // everytime he will inject the new cards in the html
  wrapper.innerHTML += code;
}

// cards used in the home page
export function createHomeCard(img,price,prevPrice,itemLeft,wrapper){
    let code = `
    <div class="itemCard">
                <div class="imgWrapper">
                    <img src="${img}"
                        alt="">
                </div>
                <div class="infoItem">
                    <div class="price">
                        <span class="discountedPrice">
                            ${price}
                        </span>
                        <span class="originalPrice">
                            ${prevPrice}
                        </span>
                    </div>
                    <span class="itemLeft">${itemLeft}</span>
                </div>
            </div>
    `
    wrapper.innerHTML += code
}
