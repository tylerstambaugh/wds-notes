import { useEffect, useState } from "react";

export function UnneecessaryUseState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //way most folks re-render based on change. Unnecessary:
  //   const [fullName, setFullName] = useState("");

  //   useEffect(() => {
  //     setFullName(`${firstName} ${lastName}`);
  //   }, [firstName, lastName]);

  //just do this instead to render fullname when first/last changes
  const fullName = `${firstName} ${lastName}`;

  return (
    <>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      {fullName}
    </>
  );
}
