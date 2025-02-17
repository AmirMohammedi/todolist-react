import { FaPlus } from "react-icons/fa"

const AddItem = ({newItem , setNewItem , handleSubmit}) => {
  return (
    <form className="addForm">
        <label htmlFor="addItem">Add Item</label>
      <input autoFocus required value={newItem} onChange={(e) => {setNewItem(e.target.value)}} id="addItem" type="text" placeholder="Add item" />
      <button type="submit"><FaPlus /></button>
    </form>
    )
}

export default AddItem