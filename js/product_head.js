const prod_head = document.getElementById("prod-head");
const receipt_id = localStorage.getItem("card-id");
console.log(receipt_id);

fetch(`https://api.spoonacular.com/recipes/${receipt_id}/information?apiKey=14b794a6bad24ed49db072ac1694ca60`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    const { title, image, summary, instructions} = data;
    const text = summary.replace("b", "")
    const step = instructions.replace("b", "")
    const markup = `<div class="left-col">
    <h3 class="subhead">Take a rest</h3>

    <div class="hero-cta">
        <p class="product-name">${title}</p>
    </div>

    <div>
        <p class="text-for-product">${summary}</p>
    </div>

</div>

<img src="${image}" class="hero-img" alt="${title}">
`;
    prod_head.innerHTML=markup;

});

