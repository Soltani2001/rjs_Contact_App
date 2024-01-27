import { useState } from "react";
import List from "./List";
import input from "./Input";
import styles from "./Contact.module.css"
import { v4 } from "uuid";

function Contact() {

    const [contact, setContact] = useState([])
    const [alert, setAlert] = useState("")
    const [contacts, setContacts] = useState({
        id:"",
        name:"",
        lastname:"",
        email:"",
        phone:"",
    })


    const changeHandeler =(event)=>{
        const value=(event.target.value);
        const name=(event.target.name);
        setContacts ((contacts)=>({
            ...contacts, [name]:value
            
        }))
    }

    const  addHandeler=()=>{
        if(!contacts.name || !contacts.lastname || !contacts.email|| !contacts.phone ){
            setAlert("Inter valid informations.")
            console.log(alert);
            return;
        }
            setAlert("")
            const newContact = {...contacts, id: v4()}
            // console.log(newContact);
        
        
        setContact(contact=>[...contact, newContact])
        // console.log(contact);
        setContacts({
            name:"",
            lastname:"",
            email:"",
            phone:"",
        })

    }

    const delletHandeler=(id)=>{
        const newContact = contact.filter(contact=> contact.id !== id)
        setContact(newContact)
    }

    return ( <>
        <h1 className={styles.header}>Contact App</h1>
        <div className={styles.container}>
            <div className={styles.form}>
                {input.map((input, index)=> <input 
                key={index}
                name={input.name} 
                type={input.type} 
                placeholder={input.placeholder}
                value={contacts[input.name]}
                onChange={changeHandeler}
         />) }
         <button onClick={addHandeler}>Add Contact</button>
        </div>
        </div>
       
        
        <div className={styles.alert}>{alert &&  <p>{alert}</p>} </div>

        <List contact={contact} delletHandeler={delletHandeler} />  
    </>);
}

export default Contact;