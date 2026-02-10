// Fade-in при скролле
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

fadeElements.forEach(el => observer.observe(el));

// Счётчик посещений (localStorage)
let visits = localStorage.getItem("siteVisits");
visits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem("siteVisits", visits);

const visitCounter = document.getElementById("visitCount");
let current = 0;

function animateVisits() {
    if (current < visits) {
        current++;
        visitCounter.textContent = current;
        requestAnimationFrame(animateVisits);
    }
}
animateVisits();

// Советы от ИИ
const tips = [
  "Наука починається з питання.",
  "Помилка — це дані для аналізу.",
  "Цікавість рухає прогрес.",
  "ШІ — інструмент, а не заміна мислення.",
  "Великі відкриття починались з ідей.",
  "Сумнів — ознака розуму.",
  "Експеримент — це чесність.",
  "Не бійся перевіряти.",
  "Думай критично.",
  "Знання люблять перевірку.",
  "Наука не терпить сліпої віри.",
  "Факти важливіші за думки.",
  "Навчайся щодня.",
  "Прогрес — це процес.",
  "Мислення важливіше пам’яті.",
  "Запитання цінніші за відповіді.",
  "Кожна помилка — шанс.",
  "Ідеї потребують доказів.",
  "Наука — шлях, а не фініш.",
  "Світ складніший, ніж здається.",
  "Розуміння приходить з часом.",
  "Логіка — твій союзник.",
  "Майбутнє створюється сьогодні.",
  "Перевіряй джерела.",
  "Не зупиняй цікавість.",
  "Знання ростуть у діалозі.",
  "Хаос має закономірності.",
  "Наука — це свобода думки.",
  "Навіть ШІ вчиться.",
  "Став під сумнів очевидне."
];

const aiBtn = document.getElementById("aiBtn");
const aiText = document.getElementById("aiText");

aiBtn.addEventListener("click", () => {
    aiText.style.opacity = 0;
    setTimeout(() => {
        aiText.textContent = tips[Math.floor(Math.random() * tips.length)];
        aiText.style.opacity = 1;
    }, 200);
});
