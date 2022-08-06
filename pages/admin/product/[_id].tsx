import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";
import LayoutAdmin from "../../../components/Layout/admin";
import useProducts from "../../../hooks/use-product";
import useSWR from "swr";
import { readId } from "../../../api/product";
import useCategories from "../../../hooks/use-category";

type ProductProps = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  sale_price: number;
  image: string;
  status: number;
  description: string;
  categoryId: string;
  author: string;
};

const EditProduct = () => {
  const router = useRouter();
  const { _id } = router.query;
  const { data, error } = useSWR(_id ? `/products/${_id}` : null);

  if (error) return <div>error</div>;
  if (!data) {
    (async (_id: any) => {
      const product = await readId(_id);
      reset(product);
    })(_id);
  }

  const { update } = useProducts();
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductProps>();

  const onSubmit: SubmitHandler<ProductProps> = async (product) => {
    await update(product);
    router.push("/admin/product");
  };
  const { data: categories, error: errorCate } = useCategories();
  if (!categories) return <div>Loading...</div>;
  if (errorCate) return <div>Failed to load</div>;

  return (
    <>
      <Head>
        <title>Edit Product</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full ml-14 mt-14 mb-10 md:ml-64 flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
        <Link href="/admin/product">
          <a className="mx-auto float-right w-20 bg-blue-600 my-2 hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
              />
            </svg>
            <span>Back</span>
          </a>
        </Link>
        <div className="mt-4 mx-4">
          <div className="max-w-5xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="z-0 mb-6 w-full group">
                <label
                  htmlFor=""
                  className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
                <input
                  type="name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("name", { required: true, minLength: 5 })}
                />
                {errors.name && errors.name.type === "required" && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
                {errors.name && errors.name.type === "minLength" && (
                  <span style={{ color: "red" }}>
                    Enter at least 5 characters
                  </span>
                )}
              </div>
              <div className="z-0 mb-6 w-full group">
                <label
                  htmlFor=""
                  className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Price
                </label>
                <input
                  type="number"
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("price", { required: true })}
                />
                {errors.price && "required" && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </div>
              <div className="z-0 mb-6 w-full group">
                <label
                  htmlFor=""
                  className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Sale Price
                </label>
                <input
                  type="number"
                  id=""
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  {...register("sale_price", { required: true })}
                />
                {/* {errors.name && "required" && (
                  <span style={{ color: "red" }}>This field is required</span>
                )} */}
              </div>
              <div className="z-0 mb-6 w-full group">
                <label
                  htmlFor=""
                  className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Description
                </label>
                <textarea
                  className="text-gray-500 bg-gray-700 border-2 border-gray-600 w-full mt-5 p-2"
                  id=""
                  cols={30}
                  rows={8}
                  defaultValue={""}
                  {...register("description", { required: true })}
                />
                {errors.description && "required" && (
                  <span style={{ color: "red" }}>This field is required</span>
                )}
              </div>
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="z-0 mb-6 w-full group">
                  <label
                    htmlFor=""
                    className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    id=""
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    {...register("image", { required: true })}
                  />
                  {errors.image && "required" && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                <div className="z-0 mb-6 w-full group">
                  <label
                    htmlFor=""
                    className="text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Auth
                  </label>
                  <input
                    type="text"
                    id=""
                    className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    {...register("author", { required: true })}
                  />
                  {errors.author && "required" && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
              </div>
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="z-0 mb-6 w-full group">
                  <select
                    id="status"
                    {...register("status", {
                      required: true,
                      valueAsNumber: true,
                    })}
                    className="form-select appearance-none block w-full px-3 py-1.5 font-normal text-gray-400 border-0 border-b-2 border-gray-500 bg-gray-700 bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:text-gray-700 text-sm focus:bg-gray-700 focus:border-blue-600 focus:outline-none"
                  >
                    <option value="" className="text-gray-400">
                      Status
                    </option>
                    <option value="1" className="text-gray-400">
                      Kích hoạt
                    </option>
                    <option value="2" className="text-gray-400">
                      Chưa kích hoạt
                    </option>
                  </select>
                  {errors.status && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
                <div className="z-0 mb-6 w-full group">
                  <select
                    id="categoryId"
                    className="form-select appearance-none block w-full px-3 py-1.5 font-normal text-gray-400 border-0 border-b-2 border-gray-500 bg-gray-700 bg-clip-padding bg-no-repeat transition ease-in-out m-0 focus:text-gray-700 text-sm focus:bg-gray-700 focus:border-blue-600 focus:outline-none"
                    {...register("categoryId", { required: true })}
                  >
                    <option value="" className="text-white">
                      Select Categories
                    </option>
                    {categories.map((category: any, index: any) => (
                      <option
                        key={index}
                        value={category._id}
                        className="text-gray-400"
                      >
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.categoryId && "required" && (
                    <span style={{ color: "red" }}>This field is required</span>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

EditProduct.Layout = LayoutAdmin;

export default EditProduct;
