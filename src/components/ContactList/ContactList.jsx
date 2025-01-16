import Contact from "../Contact/Contact";
import "./ContactList.css"

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="list-con">
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;