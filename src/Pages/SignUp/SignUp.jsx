import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userSignUpAsync } from "../../Data/Action/Auth.action/Auth.action";
const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      userName: data.name,
      email: data.email,
      password: data.password,
    };
    console.log(userInfo);
    const result = await dispatch(userSignUpAsync(userInfo));
    if (result.type === "auth/userSignUpAsync/fulfilled") {
      reset();
     navigate("/signIn")
    }
  };
  return (
    <div className="w-96 mx-auto mt-20 bg-white shadow-md p-5 relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5 mt-5">
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Name..."
            {...register("name", { required: true })}
            shadow
          />
        </div>
        <div className="mb-5 mt-5">
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            {...register("email", { required: true })}
            shadow
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="password"
            {...register("password", { required: true })}
            shadow
          />
        </div>
        <div className="flex items-center gap-2 mb-5 mt-5">
          <Checkbox {...register("checkbox", { required: true })} id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button
          className="w-full mb-3"
          gradientDuoTone="purpleToBlue"
          type="submit"
        >
          Register new account
        </Button>
      </form>
      <p className=" absolute bottom-1 text-center">
        Already Create a Account{" "}
        <Link className="text-blue-600" to={"/signIn"}>
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
