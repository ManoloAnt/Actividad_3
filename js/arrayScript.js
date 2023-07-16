let articulos = localStorage.getItem("itemList");

articulos = articulos ? articulos.split(",") : [];
showItems();

function añadirItem() {
    let articulo = document.getElementById("articulo").value
    articulo = articulo.split(",")
    for (let i = 0; i < articulo.length; i++) {
        if(articulo[i]) {
            articulos.push(articulo[i])
            showItems()
        }
        
    }
};

function showItems() {
    document.getElementById("articulo").value = ""
    let html = ""

    for (let i = 0; i < articulos.length; i++) {
        html = html + '<div class="col-6 mb-3">' + articulos[i] + '</div>'
        html = html + '<div class = "col"> <a href = "#" class="btn btn-outline-danger" onclick="deleteItem('+ i +')"> X </a> </div>'
    }

    localStorage.setItem("itemList",articulos)
    document.getElementById("items").innerHTML = html

};

function deleteItem(articulo) {
    articulos.splice(articulo,1)
    showItems()

};