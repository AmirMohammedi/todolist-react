
import ItemList from "./ItemList";

const Content = ({ items , handleChange , handleDelete}) => {
    
    
  return (
    <>
      {items.length ? <ItemList items={items} handleChange={handleChange} handleDelete={handleDelete} /> : <p style={{marginTop:"2rem" , marginLeft:"6rem"}}>No items in the list</p>}
        
    </>
  )
}

export default Content