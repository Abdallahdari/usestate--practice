import "./App.css";
import { useState } from "react";

function App() {
  const [items, SetItemes] = useState([]);
  function HandleEvent(item) {
    SetItemes((items) => [...items, item]);
  }
  function onDelete(index) {
    SetItemes((item) => item.filter((_, i) => i !== index));
  }
  return (
    <>
      <Navbar />
      <Forms onAdd={HandleEvent} />
      <Packing onDelete={onDelete} items={items} />
    </>
  );
}
function Forms({ onAdd }) {
  const [description, SetDescription] = useState();
  const [quantity, setQuantity] = useState(1);
  function HandleSubmit(e) {
    e.preventDefault();
    const newItem = { description: description, quantity: quantity };
    onAdd(newItem);
    setQuantity(1);
    SetDescription("");
  }
  return (
    <>
      <div className="container mx-auto   ">
        <div className=" flex mt-10  justify-center">
          <form
            onSubmit={HandleSubmit}
            className="bg-gray-300 shadow-md flex items-center  py-3 px-6  gap-6 text-white"
          >
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="px-3 py-2 rounded-md block"
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                <option value={num}>{num}</option>
              ))}
            </select>

            <input
              className="py-2 rounded-md px-3 outline-none focus:outline-blue-900"
              placeholder="item....."
              value={description}
              onChange={(e) => SetDescription(e.target.value)}
            />
            <button className="px-3 py-1 rounded-md bg-blue-500">
              Subbmit
            </button>
          </form>
        </div>
      </div>
      ;
    </>
  );
}
function Packing({ items, onDelete }) {
  return (
    <>
      <div className="container mx-auto">
        <div className="  flex justify-center  ">
          <div className="border w-[400px] px-4 py-3">
            {items.map((item, index) => (
              <div className="bg-white mb-5 border shadow-md p-4 rounded-md flex items-center justify-beteen gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold">{item.quantity}</span>
                </div>
                <div className="flex-grow">
                  <p className="text-lg font-semibold">{item.description}</p>
                </div>
                <button
                  onClick={() => onDelete(index)}
                  className="py-1 px-4 bg-red-600 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
function Navbar() {
  return (
    <>
      <div className="shadow-md py-5">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-mono font-semibold">LOGO</h1>
            <ul className="flex space-x-12">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
              <li>
                <a href="#">Log in</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
