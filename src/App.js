import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from "react";
import AddItem from './AddItem';
import SearchItem from './SearchItem';
function App() {
  const API_URL = 'http://localhost:3500/items';
  const [items, setItems] = useState([]);
  const [newItem , setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading , setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(API_URL);
        if(!response.ok){
          throw new Error('Could not fetch the data');
        }
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      }
      catch(error){
        setFetchError(error.message);
      }
      finally{
        setIsLoading(false);
    }}
    setTimeout(() => {(async () => await fetchItems())()}, 2000);
  }, []);
  const addItem = (item) => {
    const inputValue = item.trim();
      if (inputValue === "") {
        return;
    }
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, inputValue };
    const newList = [...items, myNewItem];
    setItems(newList);
  }
  const handleChange = (id) => {
    const newList = items.map(item => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(newList);
  }
  const handleDelete = (id) => {
    const newList = items.filter(item => item.id !== id);
    setItems(newList);
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
      <main>
        {isLoading && <p style={{ color: 'blue', textAlign:'center' }}>Loading...</p>}
        {fetchError && <p style={{ color: 'red', textAlign:'center' }}>{`Error : ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleChange={handleChange} handleDelete={handleDelete} />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
