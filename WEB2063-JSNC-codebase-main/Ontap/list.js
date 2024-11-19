// const { default: axios } = require("axios");

function getAllProduct(product){
    return `
    <tr>
              <th scope="row">${product.id}</th>
              <td>${product.title}</td>
              <td><img src="${product.image}" alt="img" width="50px" height="50px"></td>
              <td>${product.price}</td>
              <td>${product.brand}</td>
              <td>${product.ishot ? true : false}</td>
              <td>
                <button onclick=deleteData(${product.id}) class="btn btn-danger">Delete</button>
                <a href="add.html?=${product.id}">
                <button class="btn btn-info">Edit</button></a>
              </td>
            </tr>
    `
}

async function getFetchProduct() {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    document.getElementById("list").innerHTML = `
<table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Brand</th>
              <th scope="col">isHot</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            ${data.map(getAllProduct).join()}
          </tbody>
        </table>
`
}
getFetchProduct();

async function deleteData(id) {
    if(confirm("Delete !")){
        try{
            axios.delete(`http://localhost:3000/products/${id}`)
        }catch(error){
            console.log(error);
        }
    }
}