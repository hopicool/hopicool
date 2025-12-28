// Основной скрипт для сайта MineMods

document.addEventListener('DOMContentLoaded', function() {
    // Инициализация всех функций
    initCounterAnimation();
    initModCardsInteraction();
    initSmoothScroll();
    initCategoryCards();
    initModal();
    initAuthButtons();
    initCurrentYear();
    initViewAllModsButton();
    
    console.log('MineMods сайт загружен и готов к использованию!');
});

// Анимация счетчиков
function initCounterAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 20);
    });
}

// Взаимодействие с карточками модов
function initModCardsInteraction() {
    const modCards = document.querySelectorAll('.mod-card');
    
    modCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Плавная прокрутка для навигации
function initSmoothScroll() {
    document.querySelectorAll('nav a, .footer-links a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Проверяем, является ли ссылка якорем на странице
            if(targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Закрываем мобильное меню, если оно открыто
                    const mobileMenu = document.querySelector('.mobile-menu');
                    if(mobileMenu && mobileMenu.classList.contains('active')) {
                        mobileMenu.classList.remove('active');
                    }
                }
            }
        });
    });
}

// Взаимодействие с карточками категорий
function initCategoryCards() {
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterModsByCategory(category);
            
            // Добавляем визуальную обратную связь
            categoryCards.forEach(c => c.style.borderColor = 'transparent');
            this.style.borderColor = 'var(--primary)';
        });
    });
}

// Фильтрация модов по категории (имитация)
function filterModsByCategory(category) {
    const modCards = document.querySelectorAll('.mod-card');
    const categoryNames = {
        'technology': 'Технологии',
        'magic': 'Магия',
        'adventure': 'Приключения',
        'tools': 'Инструменты',
        'mobs': '
