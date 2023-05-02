const prod_foto = document.getElementById("prod-foto");
const receipt_id = localStorage.getItem("card-id");
console.log(receipt_id);
fetch(`https://api.spoonacular.com/recipes/complexSearch?query=chocolate&maxFat=25&number=1&apiKey=14b794a6bad24ed49db072ac1694ca60`)
.then((response) => {
  return response.json();
})
.then((data) => {
    console.log(data);
    const {results} = data;
    const markup = `<img src="${results[0].image}" alt="Iteams">`;
    prod_foto.innerHTML=markup;
});
