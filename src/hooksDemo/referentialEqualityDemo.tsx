import { useEffect, useState } from "react";

export function Form() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const person = { age, name };

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div style={{ background: darkMode ? "#333" : "#FFF" }}>
      Age:{" "}
      <input
        value={age}
        type="number"
        onChange={(e) => setAge(e.target.valueAsNumber)}
      />
      <br />
      Name: <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      Dark Mode:{" "}
      <input
        type="checkbox"
        checked={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
}
