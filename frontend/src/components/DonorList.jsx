import React from "react";

function DonorList({ donors }) {
  return (
    <div className="list">
      <h2>Available Donors</h2>
      {donors.length === 0 ? (
        <p>No donors found.</p>
      ) : (
        donors.map((donor, index) => (
          <div key={index} className="card">
            <h3>{donor.name}</h3>
            <p>Blood Group: {donor.bloodGroup}</p>
            <p>Location: {donor.location}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default DonorList;

