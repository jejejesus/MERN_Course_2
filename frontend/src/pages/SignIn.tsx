import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export type SignInFormData = {
    email: string;
    password: string;
}

const SignIn = () => {
    const navigate = useNavigate();
    const { showToast } = useAppContext();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormData>();

    const mutation = useMutation(apiClient.signIn, {
        onSuccess: () => {
            showToast({ message: "Signed in successfully", type: "SUCCESS" });
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
            <h2 className="text-3xl font-bold">Sign In</h2>
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
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                    },})}></input>
                    { errors.password && <span className="text-gray font-semibold"><strong>!</strong> {errors.password.message}</span> }
            </label>
            <span>
                <button type="submit"
                className="text-white bg-dark-pink p-2 rounded-md font-bold t hover:text-dark-pink hover:bg-pink">Login</button>
            </span>
        </form>
    );
}

export default SignIn;