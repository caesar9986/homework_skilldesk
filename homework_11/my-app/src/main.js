/*
Добавьте на страницу форму с полем для ввода email и кнопкой "Отправить".

При вводе email:

Если поле пустое — уберите все стили (не добавляйте ни valid, ни invalid).

Если email содержит символ @ (см. подсказку ниже) — добавьте к полю класс valid (зелёная рамка).

Если email не содержит символ @ — добавьте к полю класс invalid (красная рамка).

Под полем отображайте подсказку:
-- "Введите email" — если поле пустое.
-- "Email валиден" — если email содержит @.
-- "Некорректный email" — если email не содержит @.

Кнопка "Отправить" должна быть неактивна, если email невалиден или пустой.

При отправке формы (submit) очищайте поле и показывайте сообщение "Email отправлен!" в консоли.
*/

const emailInputForm = document.querySelector("input");
const chekerEmailInput = document.querySelector("span");
const submitInputForm = document.querySelector("button");
const dataForm = document.querySelector("form")

emailInputForm.addEventListener("input", function (inputEvent) {
  if (inputEvent.target.value.includes("@") === true) {
    chekerEmailInput.textContent = "Email валиден";
    emailInputForm.classList.remove("invalid")
    emailInputForm.classList.add("valid");
    submitInputForm.disabled = false;
  } else {
    chekerEmailInput.textContent = "Некоректный Email"
    submitInputForm.disabled = true;
    emailInputForm.classList.remove("valid");
    emailInputForm.classList.add("invalid");
  }
  if (inputEvent.target.value.length === 0) {
    chekerEmailInput.textContent = "";
    emailInputForm.classList.remove("valid");
    emailInputForm.classList.remove("invalid");
  }
  
});
dataForm.addEventListener("submit", function (submitEvent) {
    submitEvent.preventDefault();
    submitInputForm.addEventListener("click", function () {
      console.log("Email отправлен")
    })
  })