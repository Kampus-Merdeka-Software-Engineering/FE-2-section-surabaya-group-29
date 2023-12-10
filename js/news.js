async function fetchCategory() {
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const id = urlSearchParams.get("id");
      let response = await fetch(`${API_BASE_URL}/berita/${id}`);
      let responseData = await response.json();
      const news = responseData.data;
      console.log(news);
  
      const newsTitle = document.getElementById("news-title");
      newsTitle.innerHTML = news.judul;
  
      const newsAuthor = document.getElementById("news-author");
      newsAuthor.innerHTML = "Ditulis oleh " + news.penulis;
  
      const newsContent = document.getElementById("news-content");
      newsContent.innerHTML = news.isiBerita;
  
      const newsReadTime = document.getElementById("news-read-time");
      newsReadTime.innerHTML = "Waktu baca " + news.waktu_baca;
  
      const newsImage = document.getElementById("news-image");
      newsImage.src = news.foto;
  
      const newsTime = document.getElementById("news-time");
      newsTime.innerHTML = new Date(news.createdAt)
        .toLocaleDateString("id-Id")
        .replace(/\//g, "-");
    } catch (err) {
      console.log(err);
    }
  }
  
  fetchCategory();
  