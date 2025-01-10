import { Fade } from "react-awesome-reveal";
import { BsCashCoin } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdOutlineDryCleaning } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const Category = () => {
  const craftData = useLoaderData();
  console.log(craftData[0]);
  return (
    <div className="min-h-screen  ">
      <div
        style={{
          backgroundImage: "url(https://i.ibb.co/KbLHwYB/wooden-furniture.jpg)",
        }}
        className="bg-cover bg-center text-[#fff] capitalize   "
      >
        <Fade>
          <p className="md:text-5xl font-bold md:p-20 p-10 text-3xl bg-[#1a050598]">
            {" "}
            {craftData[0].subcategory_name}
          </p>
        </Fade>
      </div>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 my-20 container m-auto gap-3 px-3">
        {craftData.map((singleCraftItem, i) => (
          <div
            key={i}
            className="relative flex  flex-col rounded-xl bg-[#0a0808af] bg-clip-border text-white shadow-md mt-10  "
          >
            {singleCraftItem.stock_status === "In Stock" ? (
              <div className="absolute bg-yellow-300 left-10 text-black font-bold p-2 rounded-lg z-50">
                In Stock
              </div>
            ) : (
              ""
            )}
            <div
              className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${singleCraftItem?.image_url})`,
              }}
            ></div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {singleCraftItem?.item_name}
              </h5>
              <div className="flex justify-between font-bold">
                <div className="">
                  <p className="flex gap-1 items-center">
                    <BsCashCoin className="text-green-600" /> Price:{" "}
                    {singleCraftItem?.price} tk{" "}
                  </p>
                  <p className="flex gap-1 items-center">
                    <MdOutlineDryCleaning className="text-rose-600" />{" "}
                    Customization : {singleCraftItem?.customization}{" "}
                  </p>
                </div>
                <p className="flex gap-1 items-center">
                  <FaStar className="text-orange-400" />
                  Ratin: {singleCraftItem?.rating}{" "}
                </p>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {singleCraftItem?.short_description.length > 100
                  ? singleCraftItem?.short_description.substring(0, 100) + "..."
                  : singleCraftItem?.short_description}
              </p>
            </div>
            <div className="p-6 pt-0 caret-lime-50 flex justify-between">
              <Link
                to={`/craftItems/${singleCraftItem._id}`}
                data-ripple-light="true"
                type="button"
                className="btn border-none bg-[#e4c49e]  font-bold hover:bg-[#e4c49e93]"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
