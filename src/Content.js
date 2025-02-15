import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
    const [items , setItems] = useState([{
      id:1,
      checked:false,
      item:"item1"
    },{
      id:2,
      checked:false,
      item:"item2"
    },{
      id:3,
      checked:true,
      item:"item3"
    }
    ])
    const handleChange = (id) => {
      const newList = items.map(item => item.id === id ? {...item, checked: !item.checked} : item);
      setItems(newList);
      localStorage.setItem('shoppingList',JSON.stringify(newList));
    }
    
  return (
    <main>
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input type="checkbox" onChange={() => handleChange(item.id)} checked={item.checked} />
              <label onDoubleClick={() => handleChange(item.id)} style={(item.checked)? {textDecoration :'line-through'}:null}>{item.item}</label>
              <FaTrashAlt role="button" tabIndex="0"/>
            </li>
          ))}
        </ul>
    </main>
  )
}

export default Content