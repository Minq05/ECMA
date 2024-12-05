import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  async function onSubmit(data) {
    try {
      const res = await axios.post("http://localhost:3000/login", data);
      console.log(res.data);
      toast.success("Correct !");
      localStorage.setItem("token", res.data.accessToken);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container">
      <h1 className="text-center">LOGIN</h1>
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
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors?.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
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
              required: "Password is required",
              minLength: {
                value: 7, // Độ dài tối thiểu là 7 ký tự
                message: "Password must be at least 7 characters long", // Thông báo lỗi
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
export default Login;
