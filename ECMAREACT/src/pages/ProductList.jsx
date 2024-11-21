import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

function ProductList() {
  const [products, setProducts] = useState([]);

  async function getProductList() {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    if (confirm("Di choi ko")) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        toast.success("Xoa thanh cong");
      } catch (error) {
        console.log(error);
        toast.error("Xoa khong thanh cong !")
      }
    }
  }

  useEffect(() => {
    getProductList();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center my-2">ProductList</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.price} USD</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                  <button className="btn btn-info">Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
