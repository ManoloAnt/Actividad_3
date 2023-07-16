let articulos = localStorage.getItem('itemList');

articulos = articulos ? JSON.parse(articulos) : [];
showItem();

function addItem() {
    let nombreArticulo = document.getElementById('articulo').value
    let descripArticulo = document.getElementById('descripcion').value
    let valorArticulo = document.getElementById('valor').value
    let cantidadArticulo = document.getElementById('cantidad').value

    if(nombreArticulo && descripArticulo && valorArticulo){
        articulos.push({ 'nombreArticulo': nombreArticulo, 'descripArticulo': descripArticulo, 'valorArticulo': valorArticulo, 'cantidadArticulo':cantidadArticulo })
        showItem()
    }
};

function showItem() {
    document.getElementById('articulo').value = ''
    document.getElementById('descripcion').value = ''
    document.getElementById('valor').value = ''
    document.getElementById('cantidad').value = ''

    let html = ''
    articulos.forEach((elemt, index) => {
        html += `<div class="col-2 mb-3"> ${elemt.nombreArticulo} </div>`
        html += `<div class="col-2 mb-3"> ${elemt.descripArticulo} </div>`
        html += `<div class="col-2 mb-3"> ${elemt.valorArticulo} </div>`
        html += `<div class="col-2 mb-3"> ${elemt.cantidadArticulo} </div>`
        html += `<div class="col-3"> <a href="#" class="btn btn-outline-danger" onclick="deleteItem(${index})"> X </a> </div>`
    });

    localStorage.setItem('itemList', JSON.stringify(articulos))
    document.getElementById('articulos').innerHTML = html
};

function deleteItem(articulo) {
    articulos.splice(articulo, 1)
    showItem()
};