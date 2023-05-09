import { useEffect, useMemo, useState } from "react";

export function Form() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // this gets re-created on each render:
  //     const person = { age, name };

  const person = useMemo(() => {
    return { age, name };
  }, [age, name]);

  useEffect(() => {
    //this will get logged even when darkMode changes w/o using memo b/c the whole component re-renders
    // and a "new" person object gets created with the same properties, which is not the same
    //person. use useMemo to get around.
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
