const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchresult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const h1 = document.querySelector("h1");

const accessKey = "ShYgDZCZ9QBfnFwO28FOH2FJT2kBc1fhulnuYKtUN8E";

let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchresult.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);

    searchresult.appendChild(imageLink);
  });

  showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  page = 1;
  searchImage();
});

showMoreBtn.addEventListener("click", function (e) {
  page++;
  searchImage();
});
