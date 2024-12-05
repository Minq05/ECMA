import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function List() {
  const [products, setProduct] = useState([]);

  async function getListProduct() {
    const res = await axios.get("http://localhost:3000/products");
    setProduct(res.data);
  }

  async function deleteData(id) {
    if (confirm("DO YOU WANT DELETE THIS PRODUCT !")) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        toast.success("CORRECT !");
        window.location.reload();
      } catch (error) {
        console.log(error);
        toast.error("NOT CORRECT !");
      }
    }
  }
  useEffect(() => {
    getListProduct();
  }, []);
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
              <td>{product.category ? "true" : "faulse"}</td>
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
