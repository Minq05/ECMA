import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function List() {
  const [products, setProduct] = useState([]);
//   const nav = useNavigate();
  async function getList(data) {
    const res = await axios.get("http://localhost:3000/products", data);
    setProduct(res.data);
  }

  async function deleteData(id) {
    if (confirm("DELETE !")) {
      try {
        await axios.delete(`http://localhost:3000/products/${id}`);
        toast.success("Correct !");
        window.location.reload();
      } catch (error) {
        console.log(error);
        toast.error("FAULT !");
      }
    }
  }

  useEffect(() => {
    getList();
  }, []);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Image URL</th>
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
              <td><img src={product.image} width={"50px"} height={"50px"}/></td>
              <td>{product.price}</td>
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
