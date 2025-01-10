import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../reducers/exampleReducer";
import { useState } from "react";

const ReduxLearning = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.example.value);
  const dispatch = useDispatch();
  const handleUpdate = () => {
    setAmount(0);
    dispatch(increment());
  };
  const handleDecrement = () => {
    setAmount(0);
    dispatch(decrement());
  };
  const handleAdd = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <div className="min-h-screen bg-red-200 flex items-center justify-center">
      <div className="px-3 py-4 text-4xl border shadow-2xl rounded-xl uppercase gap-3 flex flex-col bg-white ">
        <p>this from the redux - {count}</p>
        <div className="w-full flex items-center gap-3 ">
          <input
            placeholder="Add you number "
            onChange={(e) => setAmount(Number(e.target.value))}
            className="input input-bordered w-full"
            type="number"
          />
          <button onClick={handleAdd} className="btn bg-yellow-300">
            Add
          </button>
        </div>
        <div className="flex justify-between items-center ">
          <button onClick={handleUpdate} className="btn bg-purple-300">
            {" "}
            increase
          </button>

          <button onClick={handleDecrement} className="btn bg-sky-300">
            {" "}
            increase
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default ReduxLearning;
