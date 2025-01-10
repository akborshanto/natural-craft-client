import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { BsCashCoin } from "react-icons/bs";
import { MdEdit, MdOutlineDryCleaning } from "react-icons/md";
import { ImBin2 } from "react-icons/im";
import bg from "../assets/mycrafitem.svg";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet";

const MyCraftItem = () => {
  const [craftData, setCraftData] = useState([]);
  const [filteredCraftItems, setFilteredCraftItems] = useState([]);
  const [loading, setLoading] = useState([true]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user.email) {
      fetch(`https://project-10-server-topaz.vercel.app/mycarft/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredCraftItems(data);
          setCraftData(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [user.email]);
  console.log(filteredCraftItems);
  const handlecustomaiseBtn = (text) => {
    if (text) {
      fetch(`https://project-10-server-topaz.vercel.app/customaize/${text}`)
        .then((res) => res.json())
        .then((datas) => {
          setCraftData(datas.filter((data) => data.user_email === user.email));
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  const handleDeleteButton = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          fetch(`https://project-10-server-topaz.vercel.app/craftItems/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const newCraftList = craftData.filter(
                  (craftdata) => craftdata._id !== id
                );
                setCraftData(newCraftList);
                toast.success("Coffee successfully  deleted!");
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>Natural craft - My craft item</title>
      </Helmet>
      <div
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/bwT9t6Kg/293032355-489598309833569-7450587253101489347-n.jpg)",
        }}
        className="bg-cover bg-center text-[#fff] capitalize   "
      >
        <Fade>
          <p className="md:text-5xl font-bold md:p-20 p-10 text-3xl bg-[#1a050598]">
            My craft items
          </p>
        </Fade>
      </div>
      <div>
        {loading ? (
          <div className=" min-h-screen flex items-center justify-center">
            <span className="h-16 w-16 loading loading-spinner text-warning"></span>
          </div>
        ) : (
          <div>
            {filteredCraftItems.length !== 0 ? (
              <div>
                {user ? (
                  <div>
                    <div className=" flex justify-center mt-10">
                      <details className="dropdown  ">
                        <summary className="m-1 btn  bg-[#e4c49e]  font-bold hover:bg-[#e4c49e93]">
                          customization
                        </summary>
                        <ul className="p-2 bg-[#180808c4] shadow menu dropdown-content z-[1] text-white font-bold rounded-box w-52">
                          <li>
                            <button onClick={() => handlecustomaiseBtn("Yes")}>
                              Yes
                            </button>
                          </li>
                          <li>
                            <button onClick={() => handlecustomaiseBtn("No")}>
                              No
                            </button>
                          </li>
                        </ul>
                      </details>
                    </div>

                    {craftData ? (
                      <div>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 grid-cols-1 container m-auto p-10 ">
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
                                      <BsCashCoin className="text-green-600" />{" "}
                                      Price: {singleCraftItem?.price} tk{" "}
                                    </p>
                                    <p className="flex gap-1 items-center">
                                      <MdOutlineDryCleaning className="text-rose-600" />{" "}
                                      Customization :{" "}
                                      {singleCraftItem?.customization}{" "}
                                    </p>
                                  </div>
                                  <p className="flex gap-1 items-center">
                                    <FaStar className="text-orange-400" />
                                    Ratin: {singleCraftItem?.rating}{" "}
                                  </p>
                                </div>
                                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                                  {singleCraftItem?.short_description.length >
                                  100
                                    ? singleCraftItem?.short_description.substring(
                                        0,
                                        100
                                      ) + "..."
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
                                <div className="space-x-3">
                                  <Link
                                    to={`/update/${singleCraftItem._id}`}
                                    className="btn rounded-full text-xl bg-gray-700 text-white border-none font-bold hover:bg-gray-500"
                                  >
                                    <MdEdit />
                                  </Link>
                                  <button
                                    onClick={() =>
                                      handleDeleteButton(singleCraftItem._id)
                                    }
                                    className="btn rounded-full text-xl bg-error text-white border-none font-bold hover:bg-gray-500"
                                  >
                                    <ImBin2 />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className=" min-h-screen flex items-center justify-center">
                        <span className="h-16 w-16 loading loading-spinner text-warning"></span>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className=" min-h-screen flex items-center justify-center">
                    <span className="h-16 w-16 loading loading-spinner text-warning"></span>
                  </div>
                )}
              </div>
            ) : (
              <div>
                {" "}
                <div
                  className="min-h-screen bg-no-repeat bg-cover flex flex-col items-center justify-center text-5xl font-bold dark:text-white text-center gap-3  "
                  style={{ backgroundImage: `url(${bg})` }}
                >
                  {" "}
                  <p className="text-5xl font-bold dark:text-white text-center">
                    You still have not added anything.
                  </p>
                  <Link
                    to="/addcraftitem"
                    className="btn border-none bg-gray-800 text-white"
                  >
                    Add craft item
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCraftItem;
