import React, {useState} from 'react';
import { Button } from 'react-daisyui';

const NewAppDetails = ({ addAppFunc }) => {
  //iterate through the resume versions
  // arr.push(<option> data.resume)
  const [addApp, setAddApp] = useState({company:'', status:'', resume:''})
  // const handleChange = (e) => {
  //   console.log(addApp)
  //   setAddApp({...addApp, [e.target.name]: e.target.value})
  // }
  

  // const currentStatus = ['Pending', 'Interviewing', 'Rejected']
  // const resumeUsed = ['First Version', 'Google Version', 'Standard Version']

  return (
    <form className="flex flex-col w-full" >
      <div className="grid h-64 card bg-base-300 rounded-box place-items-center">
        <input
          type="text"
          placeholder="Company Name"
          className="input input-bordered input-success w-full max-w-xs"
          onChange={(e) => console.log(e.target.value)}
          />
        <select 
        className="select select-secondary w-full max-w-xs"
        onChange={(e) => console.log(e.target.value)}

        >
          <option disabled selected>
            Current Status
            </option>
            <option>Pending</option>
            <option>Interviewing</option>
            <option>Rejected</option>
        </select>
        <select 
        className="select select-accent w-full max-w-xs"
        onChange={(e) => console.log(e.target.value)}
        >
          <option disabled selected>
            Resume Used
          </option>
          <option>First Version</option>
          <option>Google Version</option>
          <option>Standard</option>
        </select>
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary file-input-xs w-full max-w-xs"
        />
      </div>
      <button className="btn btn-outline" onClick={()=> addAppFunc()}>Add New</button>
      <div className="divider"></div>
    </form>
  );
};

export default NewAppDetails;
