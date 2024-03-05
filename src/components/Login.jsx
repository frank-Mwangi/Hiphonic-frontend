import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./Login.scss";
import { fetchUser } from "../features/users/usersSlice";
import { ErrorToast, LoadingToast, SuccessToast, ToasterContainer } from "./Toaster";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    Email: yup.string().required("Username is required"),
    Password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    LoadingToast();
    try {
      const { payload } = await dispatch(fetchUser(data));
      const { token, userDetails } = payload;
      console.log("token is ", token);
      console.log("Payload nayo ni: ", userDetails);

      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        SuccessToast("Login succeful")

        navigate("/home");
      }
    } catch (error) {
      LoadingToast(false);
      console.log(error);
      ErrorToast(error);
    }
    // else
    // {
    //     navigate("/login");
    // }
  };

  return (
    <>
      <div className="logincontainer">
        <ToasterContainer/>
        <form action="" className="login" onSubmit={handleSubmit(onSubmit)}>
          <h1>Login...</h1>
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Enter your Email..."
            {...register("Email")}
          />
          <p>{errors.Email?.message}</p>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Enter your Password..."
            {...register("Password")}
          />
          <p>{errors.Password?.message}</p>
          <input type="submit" value="Login" className="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
