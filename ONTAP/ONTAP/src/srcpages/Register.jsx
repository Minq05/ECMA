import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Register() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.post("http://localhost:3000/register", data);
      toast.success("Correct");
    } catch (error) {
      toast.error(`${error}`);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register("email",{
            required: "FAULT",
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "EMAIL NOT CORRECT !",
            }
          })}
        />
        {errors?.email && <small className="text-danger">{errors.email.message}</small>}
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
        {errors?.password && (
          <small className="text-danger">{errors.password.message}</small>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
export default Register;
