
const API_BASE_URL = 'https://be-2-section-surabaya-group-29-production.up.railway.app';


//setelah category ditekan
function passUrl(id) {
    window.location.href = `category.html?id=${id}`;
}

async function fetchCategory() {
    // const newsList = document.getElementById('judul-berita');
    try{
        const response = await fetch(`${API_BASE_URL}/category`)
        const responseData = await response.json();
        const category = responseData.data;

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
        Lifestyle.innerHTML = `<a class="text-white">${category[3].cat_name}</a>`;

        const Tech = document.getElementById('category5');
        Tech.addEventListener('click', () => {
            passUrl(category[4].id);
        });
        Tech.innerHTML = `<a class="text-white href="category.html">${category[4].cat_name}</a>`;

        const Entertainment = document.getElementById('category6');
        Entertainment.addEventListener('click', () => {
            passUrl(category[5].id);
        });
        Entertainment.innerHTML = `<a class="text-white">${category[5].cat_name}</a>`;

        const Health = document.getElementById('category7');
        Health.addEventListener('click', () => {
            passUrl(category[6].id);
        });
        Health.innerHTML = `<a class="text-white href="category.html">${category[6].cat_name}</a>`;

        const Politic1 = document.getElementById('category8');
        Politic1.addEventListener('click', () => {
            passUrl(category[0].id);
        });
        Politic1.innerHTML = `<a>${category[0].cat_name}</a>`;

        const Sport1 = document.getElementById('category9');
        Sport1.addEventListener('click', () => {
            passUrl(category[1].id);
        });
        Sport1.innerHTML = `<a>${category[1].cat_name}</a>`;

        const Business1 = document.getElementById('category10');
        Business1.addEventListener('click', () => {
            passUrl(category[2].id);
        });
        Business1.innerHTML = `<a>${category[2].cat_name}</a>`;

        const Lifestyle1 = document.getElementById('category11');
        Lifestyle1.addEventListener('click', () => {
            passUrl(category[3].id);
        });
        Lifestyle1.innerHTML = `<a class="text-white" href="category.html">${category[3].cat_name}</a>`;

        const Tech1 = document.getElementById('category12');
        Tech1.addEventListener('click', () => {
            passUrl(category[4].id);
        });
        Tech1.innerHTML = `<a class="text-white href="category.html">${category[4].cat_name}</a>`;

        const Entertainment1 = document.getElementById('category13');
        Entertainment1.addEventListener('click', () => {
            passUrl(category[5].id);
        });
        Entertainment1.innerHTML = `<a class="text-white href="category.html">${category[5].cat_name}</a>`;

        const Health1 = document.getElementById('category14');
        Health1.addEventListener('click', () => {
            passUrl(category[6].id);
        });
        Health1.innerHTML = `<a class="text-white href="category.html">${category[6].cat_name}</a>`;
    } catch(err) {
        console.error(err);
    }

    
    
};

fetchCategory();



