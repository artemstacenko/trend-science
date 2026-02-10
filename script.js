const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(el => observer.observe(el));

const numbers = document.querySelectorAll('.num');

numbers.forEach(num => {
    let end = +num.dataset.target;
    let current = 0;

    const animate = () => {
        if (current < end) {
            current++;
            num.textContent = current;
            requestAnimationFrame(animate);
        }
    };

    animate();
});

let visits = localStorage.getItem("siteVisits");

if (!visits) {
    visits = 1;
} else {
    visits = parseInt(visits) + 1;
}

localStorage.setItem("siteVisits", visits);

const counter = document.getElementById("visitCount");
let current = 0;

const animateCounter = () => {
    if (current < visits) {
        current++;
        counter.textContent = current;
        requestAnimationFrame(animateCounter);
    }
};

animateCounter();

const tips = [
  "Наука починається там, де з’являється питання.",
  "Не все, що складне, є неможливим.",
  "Помилка — це не провал, а дані для аналізу.",
  "Цікавість — головне паливо науки.",
  "Сумнів — ознака мислячої людини.",
  "Великі відкриття починались з маленьких ідей.",
  "ШІ підсилює розум, але не замінює його.",
  "Експеримент — це чесна розмова з реальністю.",
  "Наука не дає відповідей без перевірки.",
  "Майбутнє створюють ті, хто вчиться сьогодні.",
  "Не бійся ставити дивні питання.",
  "Кожна теорія колись була фантазією.",
  "Дані важливіші за здогадки.",
  "Справжні знання не бояться критики.",
  "Прогрес народжується з терпіння.",
  "Навіть помилка може привести до відкриття.",
  "Наука — це шлях, а не кінцева точка.",
  "Думай повільно, перевіряй уважно.",
  "Логіка — твій найкращий інструмент.",
  "Чим більше знаєш, тим більше питань виникає.",
  "Розуміння важливіше за запам’ятовування.",
  "Наука не має кордонів.",
  "Кожен експеримент — це крок уперед.",
  "Факти не залежать від думок.",
  "Ідеї змінюють світ, якщо їх перевірити.",
  "Не довіряй — перевіряй.",
  "Знання ростуть, коли ними діляться.",
  "Наукове мислення — це навичка.",
  "Навіть хаос має закономірності.",
  "Пізнання світу починається з себе."
];


const aiBtn = document.getElementById("aiBtn");
const aiText = document.getElementById("aiText");

aiBtn.addEventListener("click", () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    aiText.style.opacity = 0;

    setTimeout(() => {
        aiText.textContent = randomTip;
        aiText.style.opacity = 1;
    }, 200);
});
