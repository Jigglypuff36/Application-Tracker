import React, {useState, useEffect} from 'react';
import { Button } from 'react-daisyui';

const NewAppDetails = ({ addAppFunc, setApp }) => {
  //iterate through the resume versions
  // arr.push(<option> data.resume)

  // these 3
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState('')
  const [resume, setResume] = useState('')
  // const [app, setApp] = useState({company:company, status:status, resume:resume})

useEffect(() => {
// then this is second.
setApp(company)
return console.log(company, '----', resume, '----', status)
// if return. this is first

},[company, status, resume])


// all of these handlers + varibles
let companyInput = ''
let statusInput;
  const handleCompanyInput = (e) => {
    companyInput += e.target.value
    setCompany(companyInput)
  }
 
  const handleResumeChange = (e) => {
    setResume(e)

  }
  
  const handleStatusChange = (e) => {
    setStatus(e)
  }
// prop drill handle funcs down main > nav > newapp



  // const currentStatus = ['Pending', 'Interviewing', 'Rejected']
  // const resumeUsed = ['First Version', 'Google Version', 'Standard Version']

  return (
    <form className="flex flex-col w-full" >
      <div className="grid h-64 card bg-base-300 rounded-box place-items-center">
        <input
          type="text"
          placeholder="Company Name"
          className="input input-bordered input-success w-full max-w-xs"
          onChange={handleCompanyInput}
          />
        <select 
        className="select select-secondary w-full max-w-xs"
        onChange={(e) => handleResumeChange(e.target.value)}

        >
          <option disabled selected>
            Current Status
            </option>
            <option value='Pending'>Pending</option>
            <option value='Interviewing'>Interviewing</option>
            <option value='Rejected'>Rejected</option>
        </select>
        <select 
        className="select select-accent w-full max-w-xs"
        onChange={(e) => handleStatusChange(e.target.value)}
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
