import { useState } from "react";
const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [result, setResult] = useState(null);
  const submit = (e) => {
    e.preventDefault();
    setResult({ name, email });
  };
  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={submit}>
        <input value={name} placeholder="Name"
          onChange={e => setName(e.target.value)} required />
        <input value={email} type="email" placeholder="Email"
          onChange={e => setEmail(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>
      {result && <p>{result.name} - {result.email}</p>}
    </div>
  );
};
export default StudentForm;