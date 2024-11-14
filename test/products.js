const row = document.getElementById("row");

async function products(e) {
//   e.preventDefault();

  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;

  products.forEach((product) => {
    row.innerHTML += `
                <div class="col">
                    <div class="card mt-5" id="card" style="width: 17rem;">
                        <img src="${product.images}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Price : ${product.price}</li>
                            <li class="list-group-item">Discount : ${product.discountPercentage}</li>
                            <li class="list-group-item">Rating : ${product.rating}</li>
                        </ul>
                        <div class="card-body">
                            <a href="#" class="card-link">Card link</a>
                            <a href="#" class="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            `;
  });
}

products();
