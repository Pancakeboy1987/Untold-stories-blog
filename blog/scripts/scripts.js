

const tgButton = document.querySelector(".tg");

// Обработчик события при наведении
tgButton.addEventListener("mouseenter", () => {
  tgButton.style.transition = "transform 0.3s ease"; // Плавный переход
  tgButton.style.transform = "translateY(-5px)"; // Поднимаем кнопку
});

// Обработчик события при уходе курсора
tgButton.addEventListener("mouseleave", () => {
  tgButton.style.transform = "translateY(0)"; // Возвращаем кнопку на место
});


var clps = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < clps.length; i++) {
  clps[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    }
    else {
      content.style.display = "block";
    }
  });
}