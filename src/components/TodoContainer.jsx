import TodoItems from "./TodoItems";
function TodoContainer({ onDeleteItem, handleUpdateItem, filteredItems }) {
  return (
    <div>
      {filteredItems.map((item) => (
        <TodoItems
          key={item.id}
          item={item}
          onDeleteItem={() => onDeleteItem(item.id)}
          onUpdateItem={() => handleUpdateItem(item)}
        />
      ))}
    </div>
  );
}
export default TodoContainer;
