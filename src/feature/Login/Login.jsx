import { LayoutRegister } from "layout/LayoutRegister";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginAction } from "stores/slices/user.slice";

export function Login() {
    const userInfo = useSelector(state => state.users.userInfoState);
    
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    if(userInfo.data) {
        return <Navigate to={'/'}/>
    }

    const onSubmit = (data) => {
        console.log("data: ", data);
        dispatch(loginAction(data));
        // const userData = JSON.parse(localStorage.getItem(data.email));
        // if (userData) { // getItem can return actual value or null
        //     if (userData.password === data.password) {
        //         console.log(userData.name + " You Are Successfully Logged In");
        //     } else {
        //         console.log("Email or Password is not matching with our record");
        //     }
        // } else {
        //     console.log("Email or Password is not matching with our record");
        // }
    };
    return (
        <LayoutRegister>
            <div className="login-page">
                <p className="title">Login Form</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>
                    Email
                    <input type="email" {...register("email", { required: true })} />
                    {errors.email && <span style={{ color: "red" }}>
                        *Email* is mandatory </span>}
                    </p>

                    <p>
                    Password
                    <input type="password" {...register("password")} />
                    </p>

                    <div><input type={"submit"} value="Login" style={{ backgroundColor: "#a1eafb" }} /></div>
                </form>
            </div>
        </LayoutRegister>
    )
}