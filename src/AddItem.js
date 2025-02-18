import { FaPlus } from "react-icons/fa"
import { useRef } from "react"

const AddItem = ({newItem , setNewItem , handleSubmit}) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
      <input autoFocus required ref={inputRef} value={newItem} onChange={(e) => {setNewItem(e.target.value)}} id="addItem" type="text" placeholder="Add item" />
      <button onClick={()=> inputRef.current.focus()} type="submit"><FaPlus /></button>
    </form>
    )
}

export default AddItem