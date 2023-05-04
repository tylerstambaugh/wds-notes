import { FormEvent, useRef } from "react";

export function UseRefDemo() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="email">Email</label>
      <input ref={emailRef} type="email" id="email" />
      <label htmlFor="password">Password</label>
      <input ref={passwordRef} type="password" id="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
