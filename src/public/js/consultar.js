let productList = document.getElementById("products-list");
let getProductForm = document.getElementById("getProduct-form");
let url = "http://localhost:3000";

getProductForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    let data = Object.fromEntries(formData.entries());
    let idProd = data.idProd; //Ahora q mi form es objeto puedo guardar el id en una variable
    console.log(idProd);

    console.log(`Haciendo una peticion GET a la url ${url}/api/productos/${idProd}`);

    let response = await fetch(`${url}/api/productos/${idProd}/`);
    let datos = await response.json();

    if (response.ok) {

        let product = datos.payload[0] //Para extraer la respuesta payload
        showProduct(product);

    } else {
        console.log(datos.message);
        showError(datos.message)
    }
});

function showProduct(product) {
    let htmlProduct = `
                <li class="li-product">
                    <img class="product-img" src ${product.img}>
                    <p>Id : ${product.id} | Nombre: ${product.nombre} | Precio: ${product.precio}</p>
            `;
    productList.innerHTML = htmlProduct;
}

function showError(message) {
    productList.innerHTML = `
                <li class="message-error">
                    <strong>${message}</strong>
                </li>
            `;
}
