import { useNavigate } from "react-router-dom";
import useContactData from "../data";

const ContactList = () => {
  const { ContactsData: contacts } = useContactData();

  const handleClickItem = (id: number) => {
    navigate(`/contacts/detail/${id}`);
  };
  const navigate = useNavigate();

  return (
    <div>
      <h3>Contact List</h3>
      <ul>
        {contacts.map((c) => (
          <li
            style={{ cursor: "pointer" }}
            key={`itme-${c.id}`}
            onClick={() => {
              handleClickItem(c.id);
            }}
          >
            <span>
              {c.name} - {c.phone}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
