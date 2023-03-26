import { useState, useEffect } from "react";
import List from "./List/List";
import ContactEditor from "./ContactEditor/ContactEditor";
import { nanoid } from 'nanoid';
import { Filter } from "./Filter/Filter";
import { Container } from "./App.styled";

export default function App () {

    const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

 const addContact = data => {
     const newUser = {
    id: nanoid(),
       name: data.name,
     number: data.number
     }
     const existingContact = this.state.contacts.find((element) =>
      element.name.toLowerCase() === data.name.toLowerCase()
    );
    if(existingContact) {
      window.alert(`${data.name} is already in contacts`);
      return;
    }; 
     setContacts(prevState => ({
       contacts: [newUser, ...prevState.contacts]
     }))
   }

   const deleteContact = (contactId) => {
     setContacts(prevState => ({
       contacts: prevState.contacts.filter(contact=> contact.id !==contactId)
     }))
   }
   const changeFilter = e => {
     setFilter({filter: e.currentTarget.value})
   }
   const getVisibleContacts = () => {
     const normalizedContacts = filter.toLowerCase();
     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedContacts))
   }
   
  const visibleContacts = getVisibleContacts();
return (
       <Container>
         <h1>Phonebook</h1>
         <ContactEditor addContact={addContact} />
         <h2>Contacts</h2>
         <Filter value={filter} onChange={changeFilter} />
         <List contacts={visibleContacts} onDeleteContact={deleteContact} />
         </Container>
    )
}
   
  

 