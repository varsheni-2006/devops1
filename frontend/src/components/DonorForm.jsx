import React, { useState } from "react";

function DonorForm({ addDonor }) {
  const [name, setName] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && bloodGroup && location) {
      addDonor({ name, bloodGroup, location });
      setName("");
      setBloodGroup("");
      setLocation("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Donor Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Blood Group (e.g. A+)"
        value={bloodGroup}
        onChange={(e) => setBloodGroup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit">Add Donor</button>
    </form>
  );
}

export default DonorForm;








