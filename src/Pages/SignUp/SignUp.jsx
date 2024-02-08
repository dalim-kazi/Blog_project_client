import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
const SignUp = () => {
const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <form  onSubmit={handleSubmit(onSubmit)} className="w-96 mx-auto mt-20 bg-white shadow-md p-5">
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
        <TextInput id="email" type="email"  {...register("email", { required: true })} shadow />
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
        <Checkbox  {...register("checkbox", { required: true })} id="agree" />
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
      <Button className="w-full" gradientDuoTone="purpleToBlue" type="submit">
        Register new account
      </Button>
    </form>
  );
};

export default SignUp;
