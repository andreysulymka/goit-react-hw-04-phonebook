import React from "react";
import { Item, Button } from "./List.styled";
import PropTypes from 'prop-types';

const List = ({ contacts, onDeleteContact }) => <ul>{contacts.map(({ id, name, number }) => <Item key={id}><p>{name}</p><p>{number}</p>
<Button onClick = {()=>onDeleteContact(id)}>Delete</Button></Item>)}</ul>

export default List;

List.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            number: PropTypes.string,
    })
    ),    
onDeleteContact: PropTypes.func,   
};