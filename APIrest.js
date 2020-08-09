function carregando() {   
}

function consumindo(user) {
    const ruta = "https://api.github.com"
    fetch(ruta + "/users/"+user)
    .then(response => response.json())
    .then(json => console.log(json))
}

function user(user) {
    const titulo = document.getElementById("titulo")
    const image = document.getElementById("image")
    const nome = document.getElementById("nome")
    const enlace = document.getElementById("enlace")

    const ruta = "https://api.github.com"
    fetch(ruta + "/users/"+user)
    .then(response => response.json())
    .then(json => {
                    titulo.innerHTML = json.login,
                    image.src = json.avatar_url,
                    nome.innerHTML = json.name,
                    enlace.href = json.html_url,
                    enlace.innerText = json.login
                })
}

function usuario() {
    const input = document.getElementById("user_nome")
    user(input.value)
}
