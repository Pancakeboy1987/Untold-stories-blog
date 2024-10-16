

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
