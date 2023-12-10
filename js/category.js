async function fetchCategory() {
    try {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const id = urlSearchParams.get("id");

      let response = await fetch(`${API_BASE_URL}/category/${id}`);
      let responseData = await response.json();
      const category = responseData.data;
  
      response = await fetch(`${API_BASE_URL}/category/${id}/news`);
      responseData = await response.json();
      const newsList = responseData.data;
  
      if (newsList.length == 0) {
        const categoryContainer = document.getElementById("category-container");
        while (categoryContainer.firstChild) {
          categoryContainer.removeChild(categoryContainer.firstChild);
        }
        categoryContainer.innerHTML = "<h3>No news found...</h3>";
        categoryContainer.style.display = "flex";
        categoryContainer.style.alignItems = "center";
        categoryContainer.style.justifyContent = "center";
        categoryContainer.style.height = "100vh";
      }
  
      const categoryTitle = document.getElementById("category-title");
      categoryTitle.innerHTML = category.cat_name;
  
      const mainNewsTitle = document.getElementById("main-news-title");
      mainNewsTitle.innerHTML = newsList[0].judul;
      mainNewsTitle.href = "news.html?id=" + newsList[0].id;
  
      const mainNewsDescription = document.getElementById("main-news-description");
      mainNewsDescription.innerHTML = newsList[0].deskripsi;
  
      const mainNewsImage = document.getElementById("main-news-image");
      mainNewsImage.src = newsList[0].foto;
  
      const mainNewsLink = document.getElementById("main-news-link");
      mainNewsLink.href = "news.html?id=" + newsList[0].id;
  
      for (let i = 0; i < 5; i++) {
        let trendingNumber = document.getElementById("trending-" + (i + 1));
        let trendingLink = document.getElementById("trending-link-" + (i + 1));
        if (i > newsList.length - 1) {
          trendingNumber.innerHTML = "";
          trendingLink.innerHTML = "";
        } else {
          trendingLink.innerHTML = newsList[i].judul;
          trendingLink.href = "news.html?id=" + newsList[i].id;
        }
      }
  
      for (let i = 0; i < 4; i++) {
        let link = document.getElementById("title-" + (i + 1));
        let linkImage = document.getElementById("title-image-" + (i + 1));
        let linkImageContainer = document.getElementById(
          "title-image-container-" + (i + 1)
        );
        if (i + 1 > newsList.length - 1) {
          link.innerHTML = "";
          linkImageContainer.removeChild(linkImage);
          linkImageContainer.style.display = "none";
        } else {
          link.innerHTML = newsList[i + 1].judul;
          link.href = "news.html?id=" + newsList[i + 1].id;
          linkImage.src = newsList[i + 1].foto;
          linkImageContainer.href = "news.html?id=" + newsList[i + 1].id;
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  fetchCategory();