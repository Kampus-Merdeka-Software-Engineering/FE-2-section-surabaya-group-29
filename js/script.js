const API_BASE_URL = 'http://localhost:3000';

async function fetchNews() {
    const newsList = document.getElementById('judul-berita');
    try{
        const response = await fetch(`${API_BASE_URL}/berita`)
        const news = await response.json();
        console.log(news);
        const newsListElement  = news.map((news) => {
            return `
            ${news.judul}
            `
        });

        newsList.innerHTML = newsListElement;

    } catch(err) {
        console.error(err);
    }

    
};

fetchNews();

