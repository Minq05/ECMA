function getAllProduct(product) {
  return `
      <tr>
                    <th scope="row">${product.id}</th>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>
                        <button onclick=deleteData(${product.id}) class="btn btn-danger">Delete</button>
                    </td>
                  </tr>`;
}
async function fetchProduct() {
  const res = await fetch("http://localhost:3000/products2");
  const datas = await res.json();
  document.getElementById("list").innerHTML = `
    <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        ${datas.map(getAllProduct).join("")}
        </tbody>
      </table>
      `;
}
fetchProduct();

async function deleteData(id){
  try{
    if(confirm("Delete")){
      const res = await fetch(`http://localhost:3000/products2/${id}`, {
        method: "DELETE",
      });
    }
  }catch(error){
    console.log(error);
  }
}
