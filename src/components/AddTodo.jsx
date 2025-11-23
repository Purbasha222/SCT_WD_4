import { useRef } from "react";
function AddTodo({ onNewItem }) {
  const todoNameEl = useRef();
  const dueDateEl = useRef();
  const categoryEl = useRef();

  const handleAddBtnClick = (event) => {
    event.preventDefault();
    const todoName = todoNameEl.current.value;
    const dueDate = dueDateEl.current.value;
    const category = categoryEl.current.value;

    if (!todoName || !dueDate || !category) {
      alert("Please enter all the fields");
      return;
    }

    if (category == "Not Selected") {
      alert("Please select a category!");
      return;
    }

    todoNameEl.current.value = "";
    dueDateEl.current.value = "";
    onNewItem(todoName, dueDate.replace("T", " "), category);
  };

  return (
    <div className="md:flex justify-evenly border-1 rounded-md md:rounded-full p-3 bg-gray-300">
      <input
        type="text"
        placeholder="Enter Your Todo"
        className="md:w-1/2 p-2 text-xl border-2 rounded-full md:mb-0 mb-3"
        ref={todoNameEl}
      />
      <input
        type="datetime-local"
        className="p-2 text-xl border-2 rounded-full md:mb-0 mb-3"
        ref={dueDateEl}
      />

      <select
        name=""
        id=""
        ref={categoryEl}
        className="text-lg border-2 rounded-full md:mb-0 mb-3 p-2"
      >
        <option value="Not Selected">Not Selected</option>
        <option value="Gym">Gym</option>
        <option value="Study">Study</option>
        <option value="Grocery">Grocery</option>
        <option value="Fun">Fun</option>
      </select>

      <button
        type="submit"
        className="ml-5 md:ml-0 px-5 py-2 md:p-2 md:px-7 md:py-3 rounded-full bg-blue-500 text-2xl text-white cursor-pointer"
        onClick={handleAddBtnClick}
      >
        Add
      </button>
    </div>
  );
}
export default AddTodo;
