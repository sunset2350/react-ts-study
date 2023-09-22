import { MutableRefObject, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useContactData from "../data";

const nameRef = useRef() as MutableRefObject<HTMLInputElement>;
const phoneRef = useRef() as MutableRefObject<HTMLInputElement>;

const { ContactsData, mutateContactData } = useContactData();

const ContactForm = () => {
  // programatic 방식으로 라우팅 처리
  const navigate = useNavigate();

  const handleSave = () => {
    // 검증
    // 서버연동
    // 완료가 되면 목록 화면으로 이동
    mutateContactData([
      {
        id: ContactsData.length + 1,
        name: nameRef.current.value,
        phone: phoneRef.current.value,
      },
      ...ContactsData,
    ]);
    navigate("/contacts");
  };

  return (
    <div>
      <h3>Contact Form</h3>
      <input />
      <input />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ContactForm;
