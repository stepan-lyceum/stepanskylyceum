document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar-nav .nav-link');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Знімаємо активний клас у всіх посилань та секцій
            links.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active-section'));

            // Додаємо активний клас натиснутому посиланню
            link.classList.add('active');

            // Знаходимо цільову секцію та показуємо її
            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active-section');
            }
        });
    });
});
