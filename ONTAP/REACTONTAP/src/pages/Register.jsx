import axios from "axios";
import { useForm } from "react-hook-form";

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    await axios.post("http://localhost:3000/users", data);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email", {
              required: "FAULT !",
            })}
          />
          {errors?.email && <small className="text-danger">FAULT</small>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", {
              required: "FAULT !",
              minLength: {
                value: 7,
                message: "Password > 7 !",
              },
            })}
          />
          {errors?.password && (
            <small className="text-danger">{errors.password.message}</small>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Register;
