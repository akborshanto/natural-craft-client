import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Deatails = () => {
  const data = useLoaderData();
  return (
    <div className="min-h-screen">
        <Helmet>
        <title>Natural craft - {data.item_name}</title>
      </Helmet>
      <div className="grid mt-10 lg:grid-cols-4  md:grid-cols-3 grid-cols-1 container m-auto px-10">
        <div className="lg:col-span-3 md:col-span-2 p-10 flex items-center  justify-center bg-[#0e02022f] rounded-lg">
          {" "}
          <img className="w-1/2 rounded-lg " src={data.image_url} alt="" />
        </div>
        <div className="col-span-1 p-2">
          <div className="flex flex-col w-full">
            <div className="divider divider-warning dark:text-white text-[#361A19] font-bold    ">
              Deatails
            </div>
          </div>
          <div className="w-full space-y-3 overflow-hidden">
            <h1 className="text-3xl font-bold dark:text-[#AF8360] text-[#361A19]">
              {data.item_name}
            </h1>
            <h1 className="dark:text-white text-[#361A19]">
              <span className="dark:text-[#AF8360] text-[#361A19] font-bold">Subcategory Name : </span> 
               {data.subcategory_name}
            </h1>
            <h1 className="dark:text-white text-[#361A19]">
              <span className="dark:text-[#AF8360] text-[#361A19] font-bold">Customization : </span>
              {data.customization}
            </h1>
            <h1 className="dark:text-white text-[#361A19]">
              <span className="dark:text-[#AF8360] text-[#361A19] font-bold">Stock Status : </span>
              {data.stock_status}
            </h1>
            <h1 className="dark:text-white text-[#361A19]">
              <span className="dark:text-[#AF8360] text-[#361A19] font-bold"> Processing time : </span>
              {data.processing_time}
            </h1>
            <h1 className="dark:text-white text-[#361A19]">
              <span className="dark:text-[#AF8360] text-[#361A19] font-bold">Price : </span>
              {data.price} tk
            </h1>
          </div>
          
        </div>
      </div>
      <div className="dark:text-[#AF8360] text-[#361A19] font-bold text-xl p-10">Description : <p className="text-black font-normal dark:text-white">{data.short_description}</p></div>
    </div>
  );
};

export default Deatails;
