import styles from './Item.module.css'
import { MdDelete } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


function Item({contact,delletHandeler}) {


    return ( <>
     <div className={styles.container}><h3>Contacts List</h3></div>
    {contact.length ? <ul className={styles.contacts}>
        {contact.map((contact )=>
        
        (<li className={styles.item} key={contact.id}><p>{contact.name} {contact.lastname}</p><p><span><MdEmail /> </span>{contact.email}</p> <p><span><FaSquarePhone /></span>{contact.phone}</p>
        <button onClick={()=> delletHandeler(contact.id) }><MdDelete /></button>
        </li>))}
    </ul> : <p className={styles.message}>No contacts yet! </p>}
    </> );
}

export default Item;