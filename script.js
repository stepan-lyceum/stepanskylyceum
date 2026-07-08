// Очікуємо повного завантаження сторінки
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");

    // Функція для підсвічування активної кнопки при кліку
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            // Видаляємо клас active у всіх кнопок
            navLinks.forEach(item => item.classList.remove("active"));
            
            // Додаємо клас active тій кнопці, на яку клікнули
            this.classList.add("active");
        });
    });
});