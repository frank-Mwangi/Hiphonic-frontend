import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
    // const navigate = useNavigate();
    const schema = yup.object().shape({
        username: yup.string().required("Username is required"),
        password: yup.string().required("Password is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        const users = localStorage.getItem("users");
        const userList = JSON.parse(users);
        const user = userList.find((item) => data.username == item.username);
        if (user && data.password == user.password) {
            // navigate("/home");
        } else {
            alert("Authentication failed! Please enter correct username/password");
        }
    };

    return (
        <>
            <div className="logincontainer">
                <form action="" className="login" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Login...</h1>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username..."
                        {...register("username")}
                    />
                    <p>{errors.username?.message}</p>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password..."
                        {...register("password")}
                    />
                    <p>{errors.password?.message}</p>
                    <input type="submit" value="Login" className="submit" />
                </form>
            </div>

        </>
    );
};

export default Login;