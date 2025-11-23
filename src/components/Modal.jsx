import { useState } from "react";

const Modal = ({ toggleModal, selectedItem, setItems }) => {
  const [name, setName] = useState(selectedItem.name);
  const [date, setDate] = useState(selectedItem.date);
  const [category, setCategory] = useState(selectedItem.category);

  const handleSaveChanges = (e) => {
    e.preventDefault();
    const updatedItem = {
      ...selectedItem,
      name,
      date: date.replace("T", " "),
      category,
    };
    setItems((items) =>
      items.map((item) => (item.id === selectedItem.id ? updatedItem : item))
    );
    toggleModal();
    alert("Successfully updated!");
  };

  return (
    <>
      <div className="backdrop-blur-md fixed bg-black/10 h-full w-full top-0 left-0 z-5"></div>
      <div className="h-100 w-full md:h-120 md:w-120 fixed top-1/2 left-1/2 -mr-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-10 z-10">
        <button
          className="absolute top-5 right-10 bg-red-500 text-white font-bold rounded-full p-2 cursor-pointer"
          onClick={toggleModal}
        >
          Close Modal
        </button>
        <form className="mt-10" onSubmit={handleSaveChanges}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
            className="p-2 rounded-full w-full text-2xl border-2 mt-3"
          />
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            name="date"
            className="p-2 rounded-full w-full text-2xl border-2 mt-3"
          />

          <select
            name=""
            id=""
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-full w-full text-2xl border-2 mt-3"
          >
            <option value="Gym">Gym</option>
            <option value="Study">Study</option>
            <option value="Grocery">Grocery</option>
            <option value="Fun">Fun</option>
          </select>

          <button className="p-2 mt-5 rounded-full bg-green-400 text-white font-bold text-2xl cursor-pointer">
            Save Changes
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;
