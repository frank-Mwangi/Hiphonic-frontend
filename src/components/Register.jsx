
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
//import { useNavigate } from "react-router-dom";
import "./register.scss";

const Register = () => {
  //const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required("name is required"),
    username: yup.string().required("username is required"),
    age: yup
      .number("Age must be a number")
      .positive("Age must be a positive number")
      .required("Age is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/,
        "Password must Contain 4 characters, an Uppercase, a Lowercase, a Number & a special character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
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

  const onSubmit = (data) => {
    registeredUsers.push(data);
    localStorage.setItem("users", JSON.stringify(registeredUsers));
    console.log(registeredUsers);
    //navigate("/login");
  };
  return (
    <>
      <form className="register" onSubmit={handleSubmit(onSubmit)}>
        <>
          <h1>Register</h1>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
        </>
        <>
          <input
            type="text"
            placeholder="Enter your username..."
            {...register("username")}
          />
          <p>{errors.username?.message}</p>
        </>
        <>
          <input
            type="number"
            placeholder="Enter your age..."
            {...register("age")}
          />
          <p>{errors.age?.message}</p>
        </>
        <>
          <input
            type="password"
            placeholder="Enter a password..."
            {...register("password")}
          />
          <p>{errors.password?.message}</p>
        </>
        <>
          <input
            type="password"
            placeholder="Confirm your password..."
            {...register("confirmPassword")}
          />
          <p>{errors.confirmPassword?.message}</p>
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
            <a href="/login"> Login </a>
          </span>
          instead.
        </p>
      </form>
    </>
  );
};

export default Register;
