import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/TodoContainer";
import Modal from "./components/Modal";

const todoKey = "reactTodo";
function App() {
  const [items, setItems] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);

    if (!rawTodos) return [];

    return JSON.parse(rawTodos);
  });
  const [dateTime, setDateTime] = useState();

  const [openModal, setOpenModal] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const [filter, setFilter] = useState("All");

  const filteredItems =
    filter === "All" ? items : items.filter((item) => item.category == filter);

  const toggleModal = () => setOpenModal((value) => !value);

  localStorage.setItem(todoKey, JSON.stringify(items));

  const handleNewItem = (itemName, itemDate, category) => {
    const newItem = [
      ...items,
      { id: Date.now(), name: itemName, date: itemDate, category: category },
    ];
    setItems(newItem);
  };

  const handleDeleteItem = (id) => {
    const deletedItems = items.filter((item) => item.id !== id);
    setItems(deletedItems);
  };

  const handleUpdateItem = (item) => {
    setSelectedItem(item);
    toggleModal();
  };

  const clearAllButton = () => {
    setItems([]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="pl-2 pr-2 md:pr-40 md:pl-40 min-h-screen bg-gradient-to-r from-gray-500 to-gray-600">
        <h1 className="text-4xl md:text-6xl pt-3 md:pt-5 mb-5 md:mb-3 text-center font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via--500 to-amber-600">
          TODO APP
        </h1>
        <h3 className="text-2xl text-white text-center mb-10">{dateTime}</h3>
        <AddTodo onNewItem={handleNewItem} />

        <div className="flex justify-between items-center mt-5">
          <select
            name=""
            id=""
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="text-lg md:text-2xl text-white bg-black rounded-full md:p-2"
          >
            <option value="All">All</option>
            <option value="Gym">Gym</option>
            <option value="Study">Study</option>
            <option value="Grocery">Grocery</option>
            <option value="Fun">Fun</option>
          </select>
          {items.length > 0 ? (
            <button
              className="font-bold text-lg md:text-2xl text-white bg-red-500 p-2 rounded-full cursor-pointer"
              onClick={clearAllButton}
            >
              Clear All
            </button>
          ) : (
            ""
          )}
        </div>

        {items == 0 ? (
          <p className="text-4xl text-white font-bold text-center mt-15">
            NO MORE TASKS!
          </p>
        ) : (
          <TodoContainer
            items={items}
            onDeleteItem={handleDeleteItem}
            handleUpdateItem={handleUpdateItem}
            filteredItems={filteredItems}
          />
        )}
      </div>
      {openModal && (
        <Modal
          toggleModal={toggleModal}
          selectedItem={selectedItem}
          setItems={setItems}
        />
      )}
    </>
  );
}
export default App;
