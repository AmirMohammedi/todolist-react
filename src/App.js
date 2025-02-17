import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
import AddItem from './AddItem';
function App() {
  const [items, setItems] = useState([{
    id: 1,
    checked: false,
    item: "item1"
  }, {
    id: 2,
    checked: false,
    item: "item2"
  }, {
    id: 3,
    checked: true,
    item: "item3"
  }
  ]);
  const [newItem , setNewItem] = useState('');
  const handleChange = (id) => {
    const newList = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(newList);
    localStorage.setItem('shoppingList', JSON.stringify(newList));
  }
  const handleDelete = (id) => {
    const newList = items.filter(item => item.id !== id);
    setItems(newList);
    localStorage.setItem('shoppingList', JSON.stringify(newList));
  }
  const handleSubmit = (e) => {
    console.log('submitted');
    
  }
  return (
    <div className="App">

      <Header />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Content items={items} handleChange={handleChange} handleDelete={handleDelete} />
      <Footer length={items.length} />


    </div>
  );
}

export default App;
