import React, { useState } from "react";
import DonorForm from "./components/DonorForm";
import DonorList from "./components/DonorList";
import SearchBar from "./components/SearchBar";

function App() {
  const [donors, setDonors] = useState([
    { name: "Ravi Kumar", bloodGroup: "A+", location: "Chennai" },
    { name: "Priya Sharma", bloodGroup: "B-", location: "Bangalore" },
  ]);
  const [search, setSearch] = useState("");

  const addDonor = (donor) => {
    setDonors([...donors, donor]);
  };

  const filteredDonors = donors.filter(
    (d) =>
      d.bloodGroup.toLowerCase().includes(search.toLowerCase()) ||
      d.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>🩸 Blood Donation Finder</h1>
      <SearchBar setSearch={setSearch} />
      <DonorForm addDonor={addDonor} />
      <DonorList donors={filteredDonors} />
    </div>
  );
}

export default App;
