import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const params = useParams();
  const nav = useNavigate();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmitData(data) {
    try {
      await axios.put(`http://localhost:3000/products/${params.id}`, data);
      toast.success("EDIT CORRECT !");
      nav("/product/list");
    } catch (error) {
      console.log(error);
    }
  }

  async function getDetail(data) {
    const res = await axios.get(
      `http://localhost:3000/products/${params.id}`,
      data
    );
    reset(res.data);
  }

  useEffect(() => {
    getDetail(params.id);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmitData)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          {...register("name", {
            required: "FAULT",
          })}
        />
        {errors?.name && <small className="text-danger">FAULT</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image Url
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          {...register("image", {
            required: "FAULT",
          })}
        />
        {errors?.image && <small className="text-danger">FAULT</small>}
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Price
        </label>
        <input
          type="number"
          className="form-control"
          id="price"
          {...register("price", {
            min: {
              value: 1,
              message: "Price > 1",
            },
          })}
        />
        {errors?.price && (
          <small className="text-danger">{errors.price.message}</small>
        )}
      </div>
      <div className="mb-3">
        <select className="form-select" id="category" {...register("category")}>
          <option value="HP">HP</option>
          <option value="DELL">DELL</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Edit;
