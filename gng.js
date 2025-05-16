document.addEventListener("DOMContentLoaded", function () {
  //const products = document.querySelectorAll(".card-body");
  let products = document.querySelectorAll(".list-products > .card-body");
  function updateTotal() {
    let total = 0;
    products = document.querySelectorAll(".list-products > .card-body");

    products.forEach((product) => {
      const title = product.querySelector(".card-title").textContent;
      const priceText = product.querySelector(".unit-price").textContent;
      const quantity = parseInt(product.querySelector(".quantity").textContent);
      const price = parseFloat(priceText.replace("$", "").trim());

      total += price * quantity;

      console.log("title :", title);
      console.log("price :", price);
      console.log("quantity :", quantity);
      console.log("total :", total);
    });
    console.log("total price : ", total);
    document.querySelector(".total").textContent = `${total} $`;
  }
  products.forEach((product) => {
    //const test = product.querySelector(".fa-plus-circle");
    const plusBtn = product.querySelector(".fa-plus-circle");
    const minusBtn = product.querySelector(".fa-minus-circle");
    const trashBtn = product.querySelector(".fa-trash-alt");
    const heartBtn = product.querySelector(".fa-heart");
    const quantitySpan = product.querySelector(".quantity");

    plusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantitySpan.textContent);
      console.log(quantity);

      quantity++;
      quantitySpan.textContent = quantity;
      updateTotal();
    });

    minusBtn.addEventListener("click", () => {
      let quantity = parseInt(quantitySpan.textContent);
      if (quantity > 0) {
        quantity--;
        quantitySpan.textContent = quantity;
        updateTotal();
      }
    });

    trashBtn.addEventListener("click", () => {
      product.remove();
      updateTotal();
    });

    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("text-danger");
    });
  });

  //updateTotal();
});
