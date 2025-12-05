
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

    let response = await fetch(`${url}/api/productos/${idProd}`);
    let datos = await response.json();

    //Para extraer la respuesta payload
    let product = datos.payload[0]

    let htmlProduct = `
                <li class="li-product">
                    <img class="product-img" src ="${product.img}">
                    <p>Id : ${product.id} | Nombre: ${product.nombre}</p>
                </li>
                <li class="li-boxButton">
                     <input type="button" value="Eliminar producto" id="deleteProduct-button">
                </li>
            `;
    productList.innerHTML = htmlProduct;
    console.log("=== DEBUG PRODUCTO ===");

    let deleteProduct_button = document.getElementById("deleteProduct-button");

    deleteProduct_button.addEventListener("click", event => {
        event.stopPropagation();

        let confirmation = confirm("Confirmar eliminación del producto?");

        if (!confirmation) {
            alert("Eliminacion cancelada")
        } else {
            deleteProduct(product.id);
        }
    })
});

async function deleteProduct(id) {
    console.log(id) //Para confirmar que se recibio el id correctamente

    try {
        let response = await fetch(`${url}/api/productos/${id}`, {
            method: "PUT"
        });

        let result = await response.json();
        if (response.ok) {
            alert(result.message);
            //Saca el producto de la pantalla
            productList.innerHTML = "";
        } else {
            console.error("Error: ", result.message);
            alert("No se pudo eliminar el producto");
        }

    } catch (error) { //Este catch SOLO atrapa errores de red, lo mismo en el POST
        console.error("Error en la solicitud UPDATE", error);
        alert("Ocurrio un error");
    }
}
