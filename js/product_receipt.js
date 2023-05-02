const ingred = document.getElementById("ingred");
const receipt_id = localStorage.getItem("card-id");
console.log(receipt_id);
fetch(`https://api.spoonacular.com/recipes/${receipt_id}/priceBreakdownWidget.json?apiKey=14b794a6bad24ed49db072ac1694ca60`)
.then((response) => {
  return response.json();
})
.then((data) => {
    console.log(data);
    const {ingredients} = data;
    let markup = ""
    for (let i=0;  i<ingredients.length; i+=3)
    {
        markup += `
        <ul class="features-list">
        <li>${ingredients[i].name}</li>
        </ul>
    `}
  ingred.innerHTML=markup;

});
