import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export type RegisterFormData = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const navigate = useNavigate();
    const { showToast } = useAppContext();
    const {
      register,
      watch,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterFormData>();

    const mutation = useMutation(apiClient.register, {
        onSuccess: () => {
            showToast({ message: "Account created successfully", type: "SUCCESS" });
            navigate("/");
        },
        onError: (error: Error) => {
            showToast({ message: error.message, type: "ERROR" });
        }
    });

    const onSubmit = handleSubmit((data) => {
        mutation.mutate(data);
    });

    return (
        <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-3xl font-bold">Create an Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-dark-gray text-sm font-bold flex-1">
                    First Name
                    <input className="border rounded w-full py-1 px-2 font-normal"
                    {...register("firstName", { required: "This field is required" })}></input>
                    { errors.firstName && <span className="text-gray font-semibold"><strong>!</strong> {errors.firstName.message}</span> }
                </label>
                <label className="text-dark-gray text-sm font-bold flex-1">
                    Last Name
                    <input className="border rounded w-full py-1 px-2 font-normal"
                    {...register("lastName", { required: "This field is required" })}></input>
                    { errors.lastName && <span className="text-gray font-semibold"><strong>!</strong> {errors.lastName.message}</span> }
                </label>
            </div>
            <label className="text-dark-gray text-sm font-bold flex-1">
                Email
                <input type="email"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("email", { required: "This field is required" })}></input>
                { errors.email && <span className="text-gray font-semibold"><strong>!</strong> {errors.email.message}</span> }
            </label>
            <label className="text-dark-gray text-sm font-bold flex-1">
                Password
                <input type="password"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("password", { 
                        required: "This field is required",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                            message: "Password must contain at least:\none lowercase letter,\none uppercase letter,\none digit,\none special character,\nand be at least 6 characters long"
                    },})}></input>
                    { errors.password && <span className="text-gray font-semibold"><strong>!</strong> {errors.password.message}</span> }
            </label>
            <label className="text-dark-gray text-sm font-bold flex-1">
                Confirm password
                <input type="password"
                className="border rounded w-full py-1 px-2 font-normal"
                {...register("confirmPassword", {
                    validate: (val) => {
                        if (!val) return "This field is required"
                        else if (val !== watch("password")) return "Passwords must match"
                    }
                })}></input>
                { errors.confirmPassword && <span className="text-gray font-semibold"><strong>!</strong> {errors.confirmPassword.message}</span> }
            </label>
            <span>
                <button type="submit"
                className="text-white bg-dark-pink p-2 rounded-md font-bold t hover:text-dark-pink hover:bg-pink">Create Account</button>
            </span>
        </form>
    )
}

export default Register