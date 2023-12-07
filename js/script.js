
const API_BASE_URL = 'https://be-2-section-surabaya-group-29-production.up.railway.app';

async function fetchNews() {
    const newsList = document.getElementById('judul-berita');
    try{
        const response = await fetch(`${API_BASE_URL}/berita`)
        const news = await response.json();
        console.log(news);
        const newsListElement  = news.map((newsItem) => {
            return `<li>${newsItem.judul}</li>`;
        });

        newsList.innerHTML = newsListElement;

    } catch(err) {
        console.error(err);
    }

    
};

fetchNews();

