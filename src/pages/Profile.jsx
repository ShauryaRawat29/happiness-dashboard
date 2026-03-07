import { useState, useEffect } from "react";

export default function Profile() {
  const [profile, setProfile] = useState({ name: "", age: "", country: "" });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("userProfile"));
    if (saved) setProfile(saved);
  }, []);

  const save = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    alert("Saved");
  };

  return (
    <div className="card">
      <h1>Profile</h1>
      <input placeholder="Name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <input placeholder="Age"
        value={profile.age}
        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
      />
      <input placeholder="Country"
        value={profile.country}
        onChange={(e) => setProfile({ ...profile, country: e.target.value })}
      />
      <button onClick={save}>Save</button>
    </div>
  );
}