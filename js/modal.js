const buttonsOrder = document.querySelectorAll(".product__button_order")
const consulationBtn = document.querySelector(".header__consultation")
const overlayOrder = document.querySelector(".overlay_order")
const order = overlayOrder.querySelector(".modal__order")
const newArr = [consulationBtn, ...buttonsOrder]

newArr.forEach((btn) => {
   btn.addEventListener("click", () => {
      overlayOrder.classList.add("overlay_active")
      order.value = btn.dataset.order
   })
})

overlayOrder.addEventListener("click", (e) => {
   const target = e.target
   if (target === overlayOrder || target.closest(".modal__close")) {
      overlayOrder.classList.remove("overlay_active")
   }
})
