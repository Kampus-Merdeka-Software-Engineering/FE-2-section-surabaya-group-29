document.getElementById("search-input").addEventListener("input", (event) => {
    document.getElementById("showing-result").innerHTML =
      'Showing results for "' + event.target.value + '"';
    filterNews(event.target.value);
  });
  
  async function filterNews(title) {
    try {
      let response = await fetch(`${API_BASE_URL}/berita/search/${title}`);
      let responseData = await response.json();
      const newsList = responseData.data;
  
      newsContainer = document.getElementById("news-list");
      while (newsContainer.firstChild) {
        newsContainer.removeChild(newsContainer.firstChild);
      }
      for (i = 0; i < newsList.length; i++) {
        classNews = `<div class="news-container">
              <div class="left-news">
              <a href="#">
                  <img class="news-image" src="${newsList[i].foto}" />
              </a>
              </div>
              <div class="right-news">
              <a href="news/${newsList[i].id}" class="news-title">${newsList[i].judul}</a>
              <p class="news-description">${newsList[i].deskripsi}</p>
              </div>
          </div>`;
  
        newsContainer.innerHTML += classNews;
      }
  
      return newsList;
    } catch (err) {
      console.log(err);
    }
}