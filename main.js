let a=5
let b=14

let c=(a+b)*(b+a)

console.log(c)

console.log("helloo Students!")
// Массив ссылок на изображения котиков
const catImages = [
    "https://i.pinimg.com/236x/18/88/2d/18882de68a593383dfdc20b3eef1adc0.jpg"
];

// Получаем элементы из HTML
const showCatsBtn = document.getElementById('showCatsBtn');
const catsContainer = document.getElementById('catsContainer');

// Функция для показа котиков
function showCats() {
    // Очищаем контейнер перед добавлением новых котиков
    catsContainer.innerHTML = '';

    // Проходимся по массиву ссылок и создаем картинки
    catImages.forEach(imageUrl => {
        const img = document.createElement('img');  // Создаем элемент <img>
        img.src = imageUrl;  // Задаем ссылку на изображение
        catsContainer.appendChild(img);  // Добавляем изображение в контейнер
    });
}

// Добавляем обработчик события на кнопку
showCatsBtn.addEventListener('click', showCats);
