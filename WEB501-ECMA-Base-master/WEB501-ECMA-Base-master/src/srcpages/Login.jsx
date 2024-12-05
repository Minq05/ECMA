import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function onSubmitData(data) {
    try {
      const res = await axios.post("http://localhost:3000/login", data);
      toast.success("ADD CORRECT !");
      localStorage.setItem("token",res.da)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onClick={handleSubmit(onSubmitData)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
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
            minLength: {
              value: 6,
              message: "Password > 6",
            },
          })}
        />
        {errors?.password && <small>{errors.password.message}</small>}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Login;
