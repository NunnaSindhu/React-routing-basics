import React from "react";
import {Link,useNavigate} from 'react-router-dom';
export default function Layout({ contactList }) {
  const navigate=useNavigate();
  return (
    <div>
      <h1>This is Contacts page</h1>
      <ul>
        {contactList.map((contact) => {
          return (
              <Link key={contact.empId} to={`/Contacts/${contact.empId}`} > <li>{contact.empId}</li></Link>
          )
        })}
      </ul>
      <button className="btn btn-primary btn-sm" onClick={()=>navigate(1)}>NEXT</button>
    </div>
  );
}
