const container_catalog = document.getElementById("container-catalog");


fetch('https://api.spoonacular.com/recipes/findByNutrients?minCarbs=10&maxCarbs=50&number=12&apiKey=14b794a6bad24ed49db072ac1694ca60')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let markup = ""
    for (let i=0;  i<data.length; i+=3)
    {
        markup += `  <ul>
        <li data-id=${data[i].id}>
            <img src="${data[i].image}" alt="cupcake" class="card">
            <p>${data[i].title}</p>
        </li>
        
        <li data-id=${data[i+1].id}>
            <img src="${data[i+1].image}" alt="cupcake" class="card">
            <p>${data[i+1].title}</p>
        
        <li data-id=${data[i+2].id}>
            <img src="${data[i+2].image}" alt="cupcake" class="card">
            <p>${data[i+2].title}</p>
        </li>
        </li>
    </ul>`
    }

    container_catalog.innerHTML= markup;

    const cards = document.querySelectorAll(".card")
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault()
            const id = e.target.parentElement.dataset.id
            localStorage.setItem("card-id", id)
            window.location.href = "/product.html";
        })
    })
});
