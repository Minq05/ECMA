import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Add() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const nav = useNavigate();
  async function onSubmit(data) {
    try {
      await axios.post("http://localhost:3000/products", data);
      nav("/product/list");
      toast.success("Correct !");
    } catch (error) {
      console.log(error);
      toast.error("FAULT !");
    }
  }

  return (
    <div className="container">
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
              required: "FAULT !",
            })}
          />
          {errors?.name && <small className="text-danger">FAULT</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            {...register("image", {
              required: "FAULT !",
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
              required: "FAULT !",
              min: {
                value: 1,
                message: "Price > 1 !",
              },
            })}
          />
          {errors?.price && (
            <small className="text-danger">{errors.price.message}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Add;
