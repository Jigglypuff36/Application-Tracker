import React from 'react';

const NewAppDetails = ({ addApp, removeApp }) => {
  //iterate through the resume versions
  // arr.push(<option> data.resume)
  return (
    <div className="flex flex-col w-full">
      <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
        Application Details
        <input
          type="text"
          placeholder="Company Name"
          className="input input-bordered input-success w-full max-w-xs"
        />
        <select className="select select-secondary w-full max-w-xs">
          <option disabled selected>
            Current Status
          </option>
          <option>Pending</option>
          <option>Interviewing</option>
          <option>Rejected</option>
        </select>
        <select className="select select-accent w-full max-w-xs">
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

      <div className="divider"></div>
    </div>
  );
};

export default NewAppDetails;
