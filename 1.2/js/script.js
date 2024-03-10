const link = document.querySelector(".login__link");
const popup = document.querySelector(".form_wrt_us");
const close = document.querySelector(".form_close");
// const butnbuy = document.querySelector(".popular__goods--button");
const modalCart = document.querySelector(".modal_cart");
const butnBuy = document.getElementById("butnBuy");

// прослушивание кнопки войти на главной странице
try {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.add("form_show");
        console.log("клик по открывашке");
    });
} catch (error) { console.log(error) };

//  закрывание окна по крестику
try {
    close.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("form_show");
        console.log("ns закрываешь меня");
    });
} catch (error) { console.log(error) };
// мы нажимаем на кнопку в каталоге (красная с ценой) чтобы вылез попап добавить в корзину

butnBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.add("form_show");
    console.log("харе на меня жать пидр");
})

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("form_show");
    console.log("ns закрываешь меня");
});








