import Item from "./Item";
function List({contact, delletHandeler}) {
    
    return ( <>
    
   <Item contact={contact} delletHandeler={delletHandeler} />
    
    </> );
}

export default List;