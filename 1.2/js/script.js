const link = document.querySelector(".login__link");
const popup = document.querySelector(".form_wrt_us");
const close = document.querySelector(".form_close");
// const butnbuy = document.querySelector(".popular__goods--button");
const modalCart = document.querySelector(".modal_cart");
let butnBuy = document.querySelectorAll(".popular__goods--button");

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


// butBtn возвращает массив данных поэтому не получается прослушать каждую кнопку.
// Ниже функция помогает прослушивать каждую кнопку с классом popular__goods--button
// и выводить hi
// примечание не все кнопки до сих пор прослушиваются, на главной кнопки так же не работают
// решение простое на главной не было куска кода а именно modalCart вставка туда его всё решила

for (let i=0 ; i<butnBuy.length; i++) {
  butnBuy[i].addEventListener("click", function(evt){
    evt.preventDefault();
    modalCart.classList.add("form_show")
    console.log("hi");
  });
}



close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalCart.classList.remove("form_show");
    console.log("ns закрываешь меня");
});






