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
    reset,
    register,
    formState: { errors },
  } = useForm();

  async function getDetail(id) {
    const res = await axios.get(`http://localhost:3000/products/${id}`);
    reset(res.data);
  }

  async function onSubmit(data) {
    try {
      await axios.put(`http://localhost:3000/products/${params.id}`, data);
      toast.success("Correct");
      nav("/product/list");
    } catch (error) {
      toast.error(`${error}`);
    }
  }
  useEffect(() => {
    getDetail(params.id);
  }, []);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="category"
          {...register("category")}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Edit;
