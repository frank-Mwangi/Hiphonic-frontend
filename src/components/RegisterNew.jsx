import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import { Link } from "react-router-dom";
import { useAddUserMutation } from "../features/register/userApi";
import { ErrorToast, LoadingToast, SuccessToast } from "./Toaster";

const RegisterNew = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    Username: yup.string().required("username is required"),
    TagName: yup
      .string()
      .required("TagName is required")
      .test({
        test(value, ctx) {
          if (!value.startsWith("@")) {
            return ctx.createError({ message: "TagName must start with @" });
          }
          return true;
        },
      }),
    Email: yup.string().email().required("Email is required"),
    Password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Password must Contain 4 characters, an Uppercase, a Lowercase, a Number & a special character"
      ),
    ConfirmPassword: yup
      .string()
      .oneOf([yup.ref("Password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [addUser, { isLoading }] = useAddUserMutation();

  //   let registeredUsers = [];
  //   let storedUsers = localStorage.getItem("users");
  //   if (!storedUsers) {
  //     storedUsers = registeredUsers;
  //   } else {
  //     registeredUsers = JSON.parse(storedUsers);
  //   }

  const onSubmit = async (data) => {
    LoadingToast();
    //console.log("data is ", data);
    try {
      const response = await addUser(data).unwrap();
      console.log(response);
      SuccessToast("User Registered successfully");
      if (response.message) {
        navigate("/login");
      }
    } catch (error) {
      LoadingToast(false);
      console.log(error);
      ErrorToast(error);
    }
  };
  return (
    <div className="registerPage">
      <>
        <form className="register" onSubmit={handleSubmit(onSubmit)}>
          <>
            <h1>Register</h1>

            <input
              type="text"
              placeholder="Enter your Username"
              {...register("Username")}
            />
            <p>{errors.Username?.message}</p>
          </>
          <>
            <input
              type="text"
              placeholder="Enter your TagName"
              {...register("TagName")}
            />
            <p>{errors.TagName?.message}</p>
          </>
          <>
            <input
              type="text"
              placeholder="Enter your email"
              {...register("Email")}
            />
            <p>{errors.Email?.message}</p>
          </>
          <>
            <input
              type="text"
              placeholder="Enter your address/location"
              {...register("Location")}
            />
          </>
          <>
            <input
              type="Password"
              placeholder="Enter a password..."
              {...register("Password")}
            />
            <p>{errors.Password?.message}</p>
          </>
          <>
            <input
              type="password"
              placeholder="Confirm your password..."
              {...register("ConfirmPassword")}
            />
            <p>{errors.ConfirmPassword?.message}</p>
          </>

          <input
            type="submit"
            value={isLoading ? "Registering.." : "Register"}
            style={{
              width: "50%",
              height: "30px",
              borderRadius: "10px",
              border: "none",
              backgroundColor: "blue",
              color: "white",
            }}
          />
          <p>
            Already have an account?
            <span>
              {" "}
              <Link to="/login"> Login </Link>
            </span>
          </p>
        </form>
      </>
    </div>
  );
};

export default RegisterNew;
