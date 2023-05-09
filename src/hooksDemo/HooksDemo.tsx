import { UseRefDemo } from "./UseRefDemo";
import { Counter } from "./UseStateDemo";
import { Form } from "./referentialEqualityDemo";

export function HooksDemo() {
  return (
    <>
      <h1>Dealing with hooks</h1>
      <UseRefDemo />
      <hr />
      <Counter />
      <hr />
      <Form />
    </>
  );
}
