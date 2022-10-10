// const ITEMS = Array.from(document.querySelectorAll(".photocard"));
// const CONT_ITEMS = document.querySelector(".photocardcont");

// const arrowRight = document.querySelector(".sec3vector-right");

// const moveRight = () => {
//   ITEMS.forEach(function (item, i, arr) {
//     item.classList.add("to-right"); //Анимация в право
//   });
//   arrowRight.removeEventListener("click", moveRight); //чтобы во время анимации нельзя было нажать еще раз
// };

// arrowRight.addEventListener("click", moveRight);


ITEMS[0].addEventListener("animationend", function () {
  //Ждем конца анимации
  ITEMS.forEach(function (item, i, arr) {
    item.classList.remove("to-right"); //Удаление класса анимации
  });

  ITEMS.unshift(...ITEMS.splice(8, 2)); //Замена картинок местами

  let newArr = []; //Изменение HTML кода
  ITEMS.forEach(function (item, i, arr) {
    newArr.push(item.outerHTML);
  });
  CONT_ITEMS.innerHTML = newArr.join("");

  arrowRight.addEventListener("click", moveRight);
});



const ARR_LEFT = document.querySelector("#btn-left");
const ARR_RIGHT = document.querySelector("#btn-right");
const SLIDER_MOB = document.querySelector(".slider-track-mob"); //контейнер для 3х слайдов

function move_left_mob() {
    SLIDER_MOB.classList.add("trans-left-mob");
    ARR_LEFT.removeEventListener("click", move_left_mob);
}
function move_right_mob() {
    SLIDER_MOB.classList.add("trans-right-mob");
    ARR_RIGHT.removeEventListener("click", move_left_mob);
}

ARR_LEFT.addEventListener("click", move_left_mob);
ARR_RIGHT.addEventListener("click", move_right_mob);


SLIDER_MOB.addEventListener("animationend", (animationEvent) => {
    const item_1 = document.querySelector("#item1-m").innerHTML; //сам слайд в контейнере - 1
    const item_2 = document.querySelector("#item2-m").innerHTML; //сам слайд в контейнере - 2
    const item_3 = document.querySelector("#item3-m").innerHTML; //сам слайд в контейнере - 3

    if (animationEvent.animationName === 'left-mob') {
        SLIDER_MOB.classList.remove("trans-left-mob");
        document.querySelector("#item1-m").innerHTML = item_3;
        document.querySelector("#item2-m").innerHTML = item_1;
        document.querySelector("#item3-m").innerHTML = item_2;
    }

    else {
        SLIDER_MOB.classList.remove("trans-right-mob");
        document.querySelector("#item1-m").innerHTML = item_2;
        document.querySelector("#item2-m").innerHTML = item_3;
        document.querySelector("#item3-m").innerHTML = item_1;
    }

    ARR_LEFT.addEventListener("click", move_left_mob);
    ARR_RIGHT.addEventListener("click", move_right_mob);
    })