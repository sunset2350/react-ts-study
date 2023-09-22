import { Outlet, Link } from "react-router-dom";

//  /contacts - Layout - ContactSidebar
//  / contacts/form - Layout - Contactsidebar - contactForm(outlet)
const Contactsidebar = () => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <aside style={{ width: "200px" }}>
        <h2>Contact</h2>
        <ul>
          <li>
            <Link to="/contacts/form">Form</Link>
          </li>
          <li>
            <Link to="/contacts">List</Link>
          </li>
        </ul>
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Contactsidebar;
