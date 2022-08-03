import router, { Router, useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signup } from "../api/auth";
import LayoutEmpty from "../components/Layout/empty";
import { User } from "../models/User";

type FormInputs = {
  name: string;
  email: string;
  phone: number;
  password: string;
};

const SignupPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = async (user) => {
    const { data } = await signup(user);
    console.log(data);
    if (data) {
      console.log("Đăng ký thành công");
      router.push("/signin");
      // setTimeout(() => {
      // }, 2000);
    }
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://storagemaplebearnovo.blob.core.windows.net/maplebear-media/filer_public_thumbnails/filer_public/71/51/7151a441-bdfd-454a-ae61-08d967dbdc17/analitico.png__600x400_subsampling-2.png"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign up !
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label
                htmlFor="email-address"
                className="text-base text-gray-500"
              >
                Username
              </label>
              <input
                {...register("name")}
                type="text"
                autoComplete="username"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
              />
            </div>
            <div>
              <label
                htmlFor="email-address"
                className="text-base text-gray-500"
              >
                Email address
              </label>
              <input
                {...register("email")}
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
              />
            </div>
            <div>
              <label
                htmlFor="email-address"
                className="text-base text-gray-500"
              >
                Phone
              </label>
              <input
                {...register("phone")}
                type="number"
                autoComplete="email"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-base text-gray-500">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-gray-900">
                Forgot your password?
              </a>
            </div>
          </div>
          <div>
            <button className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
SignupPage.Layout = LayoutEmpty;
export default SignupPage;
