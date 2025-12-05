

let altaProducts_container = document.getElementById("altaProducts-container")
let url = "http://localhost:3000"

altaProducts_container.addEventListener("submit", async (event) => {
    event.preventDefault(); //Evita el envio por defecto del formulario
    console.log(event.target);

    let formData = new FormData(event.target);
    console.log(formData);

    //Transformo la info del objeto FormData en objeto JS nomral
    let data = Object.fromEntries(formData.entries());

    try {
        let response = await fetch(`${url}/api/productos`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {

            console.log(response);
            let result = await response.json();

            console.log(result.message); //devuelve lo q tengamos en el message dentro de nuestro response en el endpoint
            alert(result.message);
        };
    } catch (error) {
        console.error("Error al enviar los datos", error);
        alert("Error al procesar la solicitud")
    }
})
