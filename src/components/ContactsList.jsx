import React, { useState } from "react";
import './ContactsList.css';

function ContactsList() {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');

    const addContact = () => {
        if (name && telephone) {
            setContacts([...contacts, { name, telephone }]);
            setName('');
            setTelephone('');
        }
    };

    return (
        <div className="contact-list">
            <h2>Contacts List</h2>
            <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                < input type="text" value={telephone} onChange={(e) => setTelephone(e.target.value)}
                placeholder="Telephone"/>
                ,<button className="btn-add" onClick={addContact}>Add Contact</button>
            </div>
            <ul>
                {contacts.map((contact, index) =>(
                    <li key={index}>
                        <strong>{contact.name}:</strong>{contact.telephone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactsList;