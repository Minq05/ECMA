import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function List() {
  const [products, setProduct] = useState([]);

  async function deleteData(id) {
    if (confirm("DELETE")) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        toast.success("Correct");
      } catch (error) {
        toast.error(`${error}`);
      }
    }
  }

  async function ListProduct(data) {
    const res = await axios.get("http://localhost:3000/products", data);
    setProduct(res.data);
  }
  ListProduct();
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.name}</td>
              <td>
                <img src={product.image} width={"50px"} height={"50px"} />
              </td>
              <td>{product.price}</td>
              <td>{product.category ? "True" : "False"}</td>
              <td>
                <button
                  onClick={() => deleteData(product.id)}
                  className="btn btn-danger"
                >
                  DELETE
                </button>
                <Link to={`/product/edit/${product.id}`}>
                  <button className="btn btn-info">EDIT</button>
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default List;
