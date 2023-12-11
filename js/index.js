async function fetchNews() {
    try{
        const response = await fetch(`${API_BASE_URL}/berita`);
        const news = await response.json();
        console.log(news);

        const NewsList1 = document.getElementById('judul-berita-1');
        NewsList1.innerHTML = `<a class="text-white" href="news.html?id=${news[0].id}">${news[0].judul}</a>`;

        const NewsList2 = document.getElementById('judul-berita-2');
        NewsList2.innerHTML = `<a class="text-black" href="news.html?id=${news[1].id}">${news[1].judul}</a>`;

        const NewsList3 = document.getElementById('judul-berita-3');
        NewsList3.innerHTML = `<a class="text-black" href="news.html?id=${news[2].id}">${news[2].judul}</a>`;

        const Foto1 = document.getElementById('foto1');
        Foto1.src = `${news[0].foto}`;
        document.getElementById('link-foto1').href = `news.html?id=${news[0].id}`

        const Foto2 = document.getElementById('foto2');
        Foto2.src = `${news[1].foto}`;
        document.getElementById('link-foto2').href = `news.html?id=${news[1].id}`

        const Foto3 = document.getElementById('foto3');
        Foto3.src = `${news[2].foto}`;
        document.getElementById('link-foto3').href = `news.html?id=${news[2].id}`

        const Foto4 = document.getElementById('foto4');
        Foto4.src = `${news[3].foto}`;
        document.getElementById('link-foto4').href = `news.html?id=${news[3].id}`
    } catch(err) {
        console.log(err);
    }
};

fetchNews();