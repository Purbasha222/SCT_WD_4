import { useState } from "react";

function TodoItems({ item, onDeleteItem, onUpdateItem }) {
  const [checked, setChecked] = useState(false);
  return (
    <li
      className={`md:flex justify-evenly items-center mt-10 rounded-2xl md:rounded-full shadow-2xl border-1 p-2 md:p-3 bg-gray-300 ${
        checked ? "bg-green-400" : ""
      }`}
    >
      <input
        type="checkbox"
        name=""
        id=""
        className="h-5 w-5 ml-5 md:h-10 md:w-10"
        value={checked}
        onChange={() => setChecked((value) => !value)}
      />
      <span
        className={`p-2 md:p-3 text-lg md:text-2xl font-semibold ${
          checked ? "line-through" : ""
        }`}
      >
        {item.name}
      </span>
      <span className="text-lg md:text-2xl p-0 md:p-2 rounded-lg md:rounded-full bg-green-300 ml-2 md:ml-0 whitespace-nowrap">
        {item.date}
      </span>
      <div className="mt-3 md:mt-0">
        <span className="text-lg md:text-2xl text-white rounded-lg md:rounded-full p-1 md:p-3 bg-blue-400">
          {item.category}
        </span>
      </div>
      <div className="flex justify-end mt-2 md:mt-0 gap-1 md:gap-5">
        <button
          onClick={onDeleteItem}
          className="bg-red-500 text-lg md:text-2xl font-semibold px-2 py-1 md:p-1 md:px-3 rounded-lg md:rounded-full text-white cursor-pointer"
        >
          Delete
        </button>
        <button
          className="bg-yellow-400 text-lg md:text-2xl font-semibold rounded-lg md:rounded-full px-2 py-1 md:px-5 cursor-pointer"
          onClick={onUpdateItem}
        >
          Edit
        </button>
      </div>
    </li>
  );
}
export default TodoItems;
