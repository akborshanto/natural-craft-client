import { useContext } from "react";
import bg from "../assets/animatedbg.svg";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdataePage = () => {
  const { user, loading } = useContext(AuthContext);
  const data = useLoaderData();
  const handleFormData = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const image_url = form.image_url.value;
    const item_name = form.item_name.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const subcategory_name = form.subcategory_name.value;
    const customization = form.customization.value;
    const stock_status = form.stock_status.value;
    const processing_time = form.processing_time.value;
    const short_description = form.short_description.value;
    const user_name = form.user_name.value;
    const user_email = form.user_email.value;

    const itemData = {
      image_url,
      item_name,
      rating,
      subcategory_name,
      customization,
      stock_status,
      processing_time,
      short_description,
      user_email,
      user_name,
      price,
    };
    console.log(itemData);

    fetch(`https://project-10-server-topaz.vercel.app/craftItems/${id}`, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(itemData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Carft Item successfully  Updated!");
          form.reset();
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Natural craft - {data.item_name}</title>
      </Helmet>
      {loading ? (
        <div className=" min-h-screen flex items-center justify-center">
          <span className="h-16 w-16 loading loading-spinner text-warning"></span>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className=" bg-no-repeat bg-cover bg-bottom min-h-screen flex items-center justify-center mt-6 pb-6"
        >
          <form
            onSubmit={(e) => handleFormData(e, data._id)}
            className="  md:px-10 pb-10 px-3  dark:bg-[#1a111142] bg-[#251c1a2f] duration-500 mx-8 md:mx-0 shadow rounded-3xl  border-[#322C2B] dark:border-[#E4C59E] border-2"
          >
            <h1 className="dark:text-white text-[#322C2B] font-bold text-center p-4 text-3xl">
              Update your Craft Item
            </h1>
            <div className="flex flex-col md:flex-row justify-between gap-5 mb-5 md:mb-0">
              <div className="flex flex-col w-full md:mb-3">
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block">
                  Image URL:
                </label>
                <input
                  type="text"
                  required
                  name="image_url"
                  defaultValue={data.image_url}
                  placeholder="Image URL"
                  className="input input-bordered w-full max-w-xs border-[#322C2B] dark:border-[#E4C59E] outline-none focus:normal-case"
                />
              </div>
              <div className="flex flex-col w-full md:mb-3">
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block">
                  Item Name:
                </label>
                <input
                  type="text"
                  required
                  name="item_name"
                  defaultValue={data.item_name}
                  placeholder="Item Name"
                  className="input input-bordered w-full max-w-xs border-[#322C2B] dark:border-[#E4C59E] outline-none focus:normal-case"
                />
              </div>
            </div>
            <div className="flex justify-between gap-5 flex-col md:flex-row ">
              <div className="flex flex-col w-full md:mb-3">
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block">
                  Rating:
                </label>
                <input
                  type="text"
                  required
                  name="rating"
                  defaultValue={data.rating}
                  placeholder="Rating"
                  className="input input-bordered w-full max-w-xs border-[#322C2B] dark:border-[#E4C59E] outline-none focus:normal-case"
                />
              </div>
              <div className="flex flex-col w-full mb-3">
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block ">
                  Price:
                </label>
                <input
                  type="text"
                  name="price"
                  defaultValue={data.price}
                  required
                  placeholder="Price"
                  className="input input-bordered w-full max-w-xs border-[#322C2B] dark:border-[#E4C59E] outline-none  "
                />
              </div>
            </div>
            <div className="flex gap-4 justify-between">
              <div className="flex flex-col w-full mb-3 ">
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block ">
                  Subcategory Name:
                </label>
                <select
                  name="subcategory_name"
                  defaultValue={data.subcategory_name}
                  required
                  className="p-3 rounded-lg w-full text-base outline-none border-[#322C2B] dark:border-[#E4C59E] "
                >
                  <option value="">Select Subcategory</option>
                  <option value="Wooden Furniture & Sculptures">
                    Wooden Furniture & Sculptures
                  </option>
                  <option value="Wooden Home Decor">Wooden Home Decor</option>
                  <option value="Wooden Utensils and Kitchenware">
                    Wooden Utensils and Kitchenware
                  </option>
                  <option value="Jute Home Decor">Jute Home Decor</option>
                  <option value="Jute Kitchenware & utensils">
                    Jute Kitchenware & utensils
                  </option>
                  <option value="Jute and wooden jewellery">
                    Jute and wooden jewellery
                  </option>
                </select>
              </div>
              <div>
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block ">
                  Customization:
                </label>
                <select
                  className="p-3 rounded-lg text-base outline-none border-[#322C2B] dark:border-[#E4C59E] "
                  name="customization"
                  defaultValue={data.customization}
                  required
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between w-full gap-4 mb-3">
              <div>
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block">
                  Processing Time:
                </label>
                <input
                  placeholder="Processing Time"
                  defaultValue={data.processing_time}
                  required
                  className="input input-bordered w-full max-w-xs border-[#322C2B] dark:border-[#E4C59E] outline-none "
                  type="text"
                  name="processing_time"
                />
              </div>
              <div>
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block">
                  Stock Status:
                </label>
                <select
                  className="p-3 rounded-lg text-base outline-none border-[#322C2B] dark:border-[#E4C59E] "
                  name="stock_status"
                  required
                  defaultValue={data.stock_status}
                >
                  <option value="">Select Status</option>
                  <option value="In Stock">In Stock</option>
                  <option value="Made to Order">Made to Order</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block">
                Short Description:
              </label>
              <textarea
                placeholder="Short Description"
                defaultValue={data.short_description}
                className="input input-bordered w-full max-w-xs p-1 border-[#322C2B] dark:border-[#E4C59E] outline-none"
                name="short_description"
                required
              ></textarea>
            </div>

            <div className=" flex flex-col md:flex-row justify-between gap-5 mb-5 md:mb-0">
              <div className="flex flex-col w-full md:mb-3">
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block">
                  User Email:
                </label>
                <input
                  className="input input-bordered w-full max-w-xs border-[#322C2B] dark:border-[#E4C59E] outline-none "
                  type="text"
                  placeholder="Email"
                  name="user_email"
                  defaultValue={user.email}
                  disabled
                />
              </div>
              <div className="flex flex-col w-full md:mb-3">
                <label className="font-semibold text-sm  text-[#322C2B] duration-500 dark:text-[#E4C59E] pb-1 block">
                  User Name:
                </label>
                <input
                  className="input input-bordered w-full max-w-xs border-[#322C2B] dark:border-[#E4C59E] outline-none "
                  type="text"
                  placeholder="User Name"
                  defaultValue={user.displayName}
                  name="user_name"
                  disabled
                />
              </div>
            </div>
            <button
              className="btn bg-[#e4c49e] w-full m-auto text-black font-bold border-none"
              type="submit"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdataePage;
