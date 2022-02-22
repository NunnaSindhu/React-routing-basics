import React from "react";
import { useParams, useNavigate, Outlet } from "react-router-dom";

export default function ContactDetails({ getData }) {
  const { empId } = useParams();
  const navigate = useNavigate();
  const contactDetails = getData(empId);
  console.log(empId, contactDetails);
  return (
    <div className="container">
      {contactDetails ? (
        <div>
          <h1>Contact Details</h1>
          <p>Name: {contactDetails.name}</p>
          <p>Department: {contactDetails.department}</p>
          <p>Skillset: {contactDetails.skillSet}</p>
        </div>
      ) : (
        <p>Contact details not found</p>
      )}

      <button
        className="btn btn-primary btn-sm mr-5"
        onClick={() => navigate("/Contacts")}
      >
        Back
      </button>
      <button
        className="btn btn-primary btn-sm mr-5"
        onClick={() => navigate('updates')}
      >
        Updates
      </button>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => navigate("feedback")}
      >
        Feedback
      </button>
      <hr />
      <Outlet />
    </div>
  );
}
