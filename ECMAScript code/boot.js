// const product = [
//   {
//     id: 1,
//     name: "Iphone 13",
//     price: 1111,
//   },
//   {
//     id: 2,
//     name: "Iphone 14",
//     price: 2222,
//   },
//   {
//     id: 3,
//     name: "Iphone 15",
//     price: 3333,
//   },
// ];
function proAll(product) {
  return `
  <tr>
              <th scope="row">${product.id}</th>
              <td>${product.name}</td>
              <td>${product.price} VND</td>
              <td>
                <button class="btn btn-danger">Delete</button>
              </td>
            </tr>
  `;
}
// document.getElementById("list").innerHTML = `
//             <table class="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">ID</th>
//                     <th scope="col">Name</th>
//                     <th scope="col">Price</th>
//                     <th scope="col">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   ${product.map(proAll).join("")}
//                 </tbody>
//               </table>
// `;
// Map
// const numberList = [1, 2, 3];
// function doublekILL(item) {
//   return (item = 3);
// }
// const newListNumber = numberList.map(doublekILL);
// document.write(newListNumber);

function getFetch(){
  fetch("http://localhost:3000/products")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    document.getElementById('list').innerHTML = `
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
    `
  })
  .catch();
}
getFetch();

// function getAll(pro){
//   return `
//   <tr>
//               <th scope="row">${pro.id}</th>
//               <td>${pro.name}</td>
//               <td>${pro.price} VND</td>
//               <td>
//                 <button class="btn btn-danger">Delete</button>
//               </td>
//             </tr>`
// };

// function getRenFetch(){
//   axios
//     .get("http://localhost:3000/products")
//     .then((res) => {
//       const products = res.datas;
//       document.getElementById("list2").innerHTML = `
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
//           ${products.map(getAll).join("")}
//         </tbody>
//       </table>
// `;
//     })
//     .catch();
// }
// getRenFetch();
