
// API store cart project

let products = [];
let cart = [];
let productContainer = document.getElementById("products");
let search = document.getElementById("search");
fetch("https://fakestoreapi.com/products")
.then(function(response)
{
    return response.json();
})
.then(function(data)
{
    products = data;
    displayProducts(products);

});

function displayProducts(items){
    productContainer.innerHTML = "";
    if(items.length===0)
        {
        productContainer.innerHTML=
        "<h2 class='notFound'>No Products Found</h2>";
        return;
    }
    items.forEach(function(product){
     productContainer.innerHTML += `
<div class="card">
    <img
        src="${product.image}"
        class="productImage"
        data-id="${product.id}"
    >
    <h3>${product.title}</h3>
    <p>$${product.price}</p>
    <button
        class="cartBtn"
        data-id="${product.id}"
    >
        add to cart
    </button>

</div>

`;
    });
}

// task 1 : product search



search.addEventListener("keyup",function(){
    let text = search.value.toLowerCase();
    let filtered = products.filter(function(product){
        return product.title
        .toLowerCase()
        .includes(text);

    });
    displayProducts(filtered);
});


// Task 2 : Category Filter


let buttons =document.querySelectorAll(".buttons button");
buttons.forEach(function(button)
{
button.addEventListener("click",function(){
let category = button.dataset.category;
if(category=="all"){
displayProducts(products);
}

else
{
let filtered =products.filter(function(product){
return product.category==category;
});

displayProducts(filtered);
}
});
});



// taask ==3  Price Sorting


let lowHigh =document.getElementById("lowHigh");
let highLow =document.getElementById("highLow");
lowHigh.addEventListener("click",()=>{
let sorted=[...products];
sorted.sort((a,b)=>a.price-b.price);
displayProducts(sorted);
});
highLow.addEventListener("click",()=>{
let sorted=[...products];
sorted.sort((a,b)=>b.price-a.price);
displayProducts(sorted);
});



// task == 4 Product Details Modal



let modal = document.getElementById("modal");
let modalBody = document.getElementById("modalBody");
let closeBtn = document.getElementById("close");
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("productImage")) {
        let id = e.target.dataset.id;
        let product = products.find(function (item) {
            return item.id == id;
        });
        modal.style.display = "block";
        modalBody.innerHTML = `
            <img src="${product.image}" width="200">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <h3>Price : $${product.price}</h3>
            <p><b>Category :</b> ${product.category}</p>
            <p><b>Rating :</b> ⭐ ${product.rating.rate}</p>
        `;
    }
});

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});
window.addEventListener("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});



// task =5 == Shopping Cart

let cartDiv = document.getElementById("cart");
let cartCount = document.getElementById("cartCount");
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("cartBtn")) {
        let id = e.target.dataset.id;
        let product = products.find(function (item) {
            return item.id == id;
        });
        let exist = cart.find(function (item) 
        {
            return item.id == id;
        });
        if (exist) {
            exist.quantity++;
        }
        else {
            cart.push({
                ...product,
                quantity: 1
            });

        }

        displayCart();
    }
});

function displayCart() {
    cartDiv.innerHTML = "";
    let grandTotal = 0;
    cart.forEach(function (item) {
        let total = item.price * item.quantity;
        grandTotal += total;
        cartDiv.innerHTML += `
            <div class="cartItem">
                <div>
                    <h4>${item.title}</h4>

                    <p>Quantity : ${item.quantity}</p>
                </div>
                <div>
                    <h4>$${total.toFixed(2)}</h4>
                </div>
            </div>

        `;
    });

    let totalItems = cart.reduce(function (sum, item) 
    {
        return sum + item.quantity;
    }, 0);

    cartCount.innerHTML = "Items : " + totalItems;
    cartDiv.innerHTML += `
        <h2 class="grandTotal">

            Grand Total : $${grandTotal.toFixed(2)}

        </h2>
    `;
}