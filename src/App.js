import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";
import AddItem from './AddItem';
import SearchItem from './SearchItem';
function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')) || []);
  const [newItem , setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const newList = [...items, myNewItem];
    setAndSaveItems(newList);
  }
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));
  }
  const handleChange = (id) => {
    const newList = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setAndSaveItems(newList);
  }
  const handleDelete = (id) => {
    const newList = items.filter(item => item.id !== id);
    setAndSaveItems(newList);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
    
  }
  return (
    <div className="App">

      <Header />
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleChange={handleChange} handleDelete={handleDelete} />
      <Footer length={items.length} />


    </div>
  );
}

export default App;
