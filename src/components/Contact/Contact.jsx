import "./Contact.css"

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className="contact-card">
      {name}: {number}
      <button className="con-btn" onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
};

export default Contact;