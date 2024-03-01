import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import "./register.scss";
import { addUser } from "../features/users/usersSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    TagName: yup.string().required("name is required"),
    Username: yup.string().required("username is required"),
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

  let registeredUsers = [];
  let storedUsers = localStorage.getItem("users");
  if (!storedUsers) {
    storedUsers = registeredUsers;
  } else {
    registeredUsers = JSON.parse(storedUsers);
  }

  const onSubmit = async (data) => {
    console.log("data is ", data);

    const { payload } = await dispatch(addUser(data));
    const { message } = payload;

    if (message) {
      navigate("/login");
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
            placeholder="Enter your username"
            {...register("Username")}
          />
          <p>{errors.name?.message}</p>
        </>
        <>
          <input
            type="text"
            placeholder="@iamrich..."
            {...register("TagName")}
          />
          <p>{errors.Username?.message}</p>
        </>
        <>
          <input
            type="text"
            placeholder="example@gmail.com..."
            {...register("Email")}
          />
        </>
        <>
          <input
            type="text"
            placeholder="254, North hampshire drive..."
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
          value="Register"
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

export default Register;
