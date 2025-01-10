import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { personal } from "../reducers/exapleObject";

const ReduxObject = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const handleUpdatePersonalData = () => {
    document.getElementById("updatePersonalData").showModal();
  };
  const dispatch = useDispatch();
  const personalData = useSelector((state) => state.personalData);
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(personal({ name, age: parseInt(age), class: studentClass }));

    document.getElementById("updatePersonalData").close();
  };
  console.log(name, age, studentClass);
  return (
    <div className="min-h-screen bg-rose-200 flex items-center justify-center">
      <div className=" px-5 py-4 bg-white rounded-lg shadow-2xl text-center space-y-3">
        <p className="text-xl">Personal Information </p>
        <div>
          <div className="flex flex-col gap-3 ">
            <p className="text-4xl font-bold">{personalData.name}</p>
            <div className="flex gap-2 text-left">
              <p className="text-xl">Age :</p>
              <p className="text-xl font-bold">{personalData.age}</p>
            </div>
            <div className="flex gap-2 text-left">
              <p className="text-xl">Class :</p>
              <p className="text-xl  font-bold">{personalData.class
                }</p>
            </div>
          </div>
        </div>
        <div onClick={handleUpdatePersonalData} className="w-full">
          <button className="btn bg-sky-300 w-full"> Update</button>
        </div>
        <dialog id="updatePersonalData" className="modal">
          <div className="modal-box">
            <h2 className="text-lg font-bold">Update Personal Data</h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-3 grid grid-cols-2 gap-3"
            >
              <div className="flex items-center gap-3 mt-3">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered"
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Class"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                className="input input-bordered col-span-2"
                required
              />
              <button
                type="submit"
                className="btn bg-sky-300 w-full col-span-2"
              >
                Submit
              </button>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button type="button">Close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default ReduxObject;
