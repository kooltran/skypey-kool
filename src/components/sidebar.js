import React from "react";
import User from '../containers/user';
import "./Sidebar.css";

const Sidebar = ({ contacts }) => {
  console.log(contacts, 'initialState')
  return (
    <aside className="Sidebar">
      {contacts.map(contact => <User user={contact} key={contact.user_id} />)}
    </aside>
  );
};

export default Sidebar;
