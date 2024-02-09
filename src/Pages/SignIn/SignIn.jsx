import React from "react";
import { useForm } from "react-hook-form";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userSignInAsync } from "../../Data/Action/Auth.action/Auth.action";
const SignIn = () => {
  const dispatch =useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async(data) => {
    const userInfo = {
      email: data.email,
      password:data.password
    }
    const result = await dispatch(userSignInAsync(userInfo))
    if (result) {
      reset()
    }
  };
  return (
    <div className="w-96 mx-auto mt-20 bg-white shadow-md p-8 relative">
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
          {errors.name && <span>This field is required</span>}
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
          {errors.name && (
            <span className="text-red-600">This field is required</span>
          )}
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
          {errors.password && (
            <span className="text-red-600">This field is required</span>
          )}
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
        {errors.checkbox && (
          <span className="text-red-600">This field is required</span>
        )}
        <Button
          className="w-full mt-5"
          gradientDuoTone="purpleToBlue"
          type="submit"
        >
          Sign In
        </Button>
      </form>
      <p className=" absolute bottom-1 text-center">
        Create a new account{" "}
        <Link to={"/signUp"} className="text-blue-600">
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
