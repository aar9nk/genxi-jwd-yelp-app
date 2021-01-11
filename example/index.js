const apiKey =
  "ZV8RLxPkyiqIKvOvZJT-QJ25OATfceSnENURnsL7Kooq_4XvkSqrNgS5PZu9TqBAHJOjGDapE5QZoaIQIGrWkRSp857ZAYKlSwJhio_WQyC85QsOxWvkNixLmeW9XHYx";

const form = document.querySelector("form");
const list = document.querySelector("ul");
const input = document.querySelector("input");

const getDataFromYelp = async (location) => {
  let response = await fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&sort_by=rating&open_now=true`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    }
  );

  let data = await response.json();
  return data;
};

const createCardHtml = (name, image, rating, link) => `
<li class="list-group-item ">
<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${image}" alt="${name}">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Rating: ${rating}</p>
    <a href="${link}" class="btn btn-primary">Check it out</a>
  </div>
</div>
</li>
`;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = input.value;
  let html = "";

  getDataFromYelp(location).then((data) => {
    data.businesses.map((business) => {
      const name = business.name;
      const image = business.image_url;
      const rating = business.rating;
      const link = business.url;

      const cardHtml = createCardHtml(name, image, rating, link);
      html += cardHtml;
    });
    list.innerHTML = html;
  });
});
