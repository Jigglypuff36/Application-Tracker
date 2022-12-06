import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import Button from "./Button";
import FormInput from './FormInput'

function generateId () {
  return '_' + Math.random().toString(36).substr(2, 9);
}

function NewApplication () {
  const [newApplication, setnewApplication] = React.useState([])
  const [input, setInput] = React.useState('')

  const handleSubmit = () => {
    setNewApplication((newApplication) => newApplication.concat({
      text: input,
      id: generateId()
    }))
    setInput('')
  }

  const removeNewApplication = (id) => setNewApplication((newApplication) => newApplication.filter((t) => t.id !== id))

  return (
    <div>
        <FormInput
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='New Application'       
        >
        </FormInput>
      <Button onClick={handleSubmit}>Submit</Button>

      <ul>
        {newApplication.map(({ text, id }) => (
          <li key={id}>
            <span>{text}</span>
            <Button onClick={() => removeNewApplication(id)}>X</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewApplication
