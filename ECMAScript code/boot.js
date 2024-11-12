function proAll(product) {
  return `
  <tr>
              <th scope="row">${product.id}</th>
              <td>${product.name}</td>
              <td>${product.price} VND</td>
              <td>
                <button onClick=deleteData(${product.id}) class="btn btn-danger">Delete</button>
              </td>
            </tr>
  `;
}

async function getProductAsyneFetch() {
  const res = await fetch("http://localhost:3000/products");
  const data = await res.json();
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
          ${data.map(proAll).join("")}
        </tbody>
      </table>
  `;
}
getProductAsyneFetch();

// Delete produts
async function deleteData(id) {
  try {
    if (confirm("Delete")) {
      const res = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE", // Phương thức xóa
      });
    }
  } catch (error) {
    console.error(error);
  }
}

// async function showProductList() {
//   const res = await axios.get("http://localhost:3000/products2");
//   const products = res.data;
//   document.getElementById("list2").innerHTML = `
//       <table class="table">
//         <thead>
//           <tr>
//             <th scope="col">ID</th>
//             <th scope="col">Name</th>
//             <th scope="col">Price</th>
//             <th scope="col">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//         ${products.map(proAll).join("")}
//         </tbody>
//       </table>
//        `;
// }

// showProductList();

// async function deleteProduct(id) {
//   if (confirm("Di choi ko")) {
//     try {
//       await axios.delete(`http://localhost:3000/products2/${id}`);
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }
