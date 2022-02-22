import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import ContactDetails from "./pages/ContactDetails";

function App() {
  const contactList = [
    {
      name: "Emp 1",
      empId: "1000",
      department: 'UI',
      skillSet: 'REACT',   
      updates:[
        {field:'name'},
        {value:'First Update'}
      ]  
    },
    {
      name: "Emp 2",
      empId: "1001",
      department: 'UX',
      skillSet: 'JS', 
      updates:[
        {field:'New Name'},
        {value:'Second Update-2'}
      ] 
    },
    {
      name: "Emp 3",
      empId: "1002",
      department: 'FrontEnd',
      skillSet: 'Angular',
      updates:[
        {field:'New Name'},
        {value:'Second Update-1'}
      ] 
    },
  ];
const getData = (id) =>{
  return (contactList.find(contact=>contact.empId===id));
}

  return (
    <Routes>
      <Route index element={<Layout />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Contacts" element={<Contacts contactList={contactList} />} />
      <Route path="/Contacts/:empId" element={<ContactDetails getData={getData} />} >
      <Route path='updates' element={<div>Updates</div>} />
      <Route path='feedback' element={<div>Feedback</div>} />
      </Route>
    </Routes>
  );
}

export default App;
