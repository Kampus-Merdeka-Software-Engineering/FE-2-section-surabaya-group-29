
const API_BASE_URL = 'https://be-2-section-surabaya-group-29-production.up.railway.app';

async function fetchNews() {
    // const newsList = document.getElementById('judul-berita');
    try{
        const response = await fetch(`${API_BASE_URL}/berita`)
        const news = await response.json();
        console.log(news);

        const NewsList1 = document.getElementById('judul-berita-1');
        NewsList1.innerHTML = `<a href="news.html">${news[0].judul}</a>`;

        const NewsList2 = document.getElementById('judul-berita-2');
        NewsList2.innerHTML = `<a href="news.html">${news[1].judul}</a>`;

        const NewsList3 = document.getElementById('judul-berita-3');
        NewsList3.innerHTML = `<a href="news.html">${news[2].judul}</a>`;
    } catch(err) {
        console.error(err);
    }

    
};

fetchNews();

//setelah category ditekan
function passUrl(id) {
    window.location.href = `category.html?id=${id}`;
}

async function fetchCategory() {
    // const newsList = document.getElementById('judul-berita');
    try{
        const response = await fetch(`${API_BASE_URL}/category`)
        const category = await response.json();
        console.log(category);

        const Politic = document.getElementById('category1');
        Politic.addEventListener('click', () => {
            passUrl(category[0].id);
        });
        Politic.innerHTML = `<a>${category[0].cat_name}</a>`;

        const Sport = document.getElementById('category2');
        Sport.addEventListener('click', () => {
            passUrl(category[1].id);
        });
        Sport.innerHTML = `<a>${category[1].cat_name}</a>`;

        const Business = document.getElementById('category3');
        Business.addEventListener('click', () => {
            passUrl(category[2].id);
        });
        Business.innerHTML = `<a>${category[2].cat_name}</a>`;

        const Lifestyle = document.getElementById('category4');
        Lifestyle.addEventListener('click', () => {
            passUrl(category[3].id);
        });
        Lifestyle.innerHTML = `<a href="category.html">${category[3].cat_name}</a>`;

        const Tech = document.getElementById('category5');
        Tech.addEventListener('click', () => {
            passUrl(category[4].id);
        });
        Tech.innerHTML = `<a href="category.html">${category[4].cat_name}</a>`;

        const Entertainment = document.getElementById('category6');
        Entertainment.addEventListener('click', () => {
            passUrl(category[5].id);
        });
        Entertainment.innerHTML = `<a href="category.html">${category[5].cat_name}</a>`;

        const Health = document.getElementById('category7');
        Health.addEventListener('click', () => {
            passUrl(category[6].id);
        });
        Health.innerHTML = `<a href="category.html">${category[6].cat_name}</a>`;
    } catch(err) {
        console.error(err);
    }

    
};

fetchCategory();
