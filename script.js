const products = [
{
name:"Laptop",
category:"Electronics",
price:"₹50,000",
image:"https://via.placeholder.com/250"
},
{
name:"Smartphone",
category:"Electronics",
price:"₹20,000",
image:"https://via.placeholder.com/250"
},
{
name:"T-Shirt",
category:"Fashion",
price:"₹799",
image:"https://via.placeholder.com/250"
},
{
name:"Shoes",
category:"Fashion",
price:"₹1999",
image:"https://via.placeholder.com/250"
}
];

const productContainer=document.getElementById("products");
const search=document.getElementById("search");
const category=document.getElementById("category");

function displayProducts(items){
productContainer.innerHTML="";

items.forEach(product=>{
productContainer.innerHTML+=`
<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<p>${product.category}</p>
<p>${product.price}</p>
</div>
`;
});
}

displayProducts(products);

function filterProducts(){
const searchValue=search.value.toLowerCase();
const categoryValue=category.value;

const filtered=products.filter(product=>{
const matchesSearch=
product.name.toLowerCase().includes(searchValue);

const matchesCategory=
categoryValue==="all" ||
product.category===categoryValue;

return matchesSearch && matchesCategory;
});

displayProducts(filtered);
}

search.addEventListener("input",filterProducts);
category.addEventListener("change",filterProducts);