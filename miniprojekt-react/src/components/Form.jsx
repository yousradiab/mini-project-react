import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { name, username, email, age };

    resetForm();

    await fetch("http://localhost:5003/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  function resetForm() {
    setName("");
    setUsername("");
    setEmail("");
    setAge("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <br></br>
        Navn: <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <br></br>
        <br></br>
        Brugernavn: <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <br></br>
        <br></br>
        Email: <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
        <br></br>
        <br></br>
        Alder: <input value={age} onChange={(e) => setAge(e.target.value)}></input>
        <button>Submit</button>
      </label>
    </form>
  );
}
