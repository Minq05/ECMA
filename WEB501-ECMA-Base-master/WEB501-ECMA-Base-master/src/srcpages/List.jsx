import axios from "axios";
import { useEffect, useState } from "react";

function List() {

  const [products, setProduct] = useState([]);

  async function getListProduct(data){
    const res = await axios.get("http://localhost:3000/products",data);
    setProduct(res.data);
  }

  useEffect(()=>{
    etLis
  })
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
        <tr>
          <th scope="row"></th>
          <td></td>
          <td>
            <img width={"50px"} height={"50px"} />
          </td>
          <td></td>
          <td></td>
          <td>
            <button className="btn btn-danger">DELETE</button>
            <button className="btn btn-info">EDIT</button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default List;
