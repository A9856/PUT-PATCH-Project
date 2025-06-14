// PUT Request Complete Data Update  
import React, { useState } from 'react'
export default function PutUpdataExample() {
  const [Name, setName] = useState("");
  const [Designation, setDesignation] = useState("");
  const [Salary, setSalary] = useState("");
  const [state,setState]=useState("");
  const [responseData, setResponseData] = useState(null);
  const PutUpdate = async (e) => {
    e.preventDefault();
    const updatePost = { Name, Designation, Salary,state };
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",//PUT Request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatePost),
      });
      const result = await response.json();
      setResponseData(result);
      // Input Reset 
      setName("");
      setDesignation("");
      setSalary("");
      setState("");
    } catch (error) {
      console.log("error in Data Update", error);
    }
  }
  return (
    <>
      <h2>API Data Updata(PUT Request)</h2>
      <form onSubmit={PutUpdate}>
        <input type='text' placeholder='Enter Name' value={Name} onChange={(e) => setName(e.target.value)} required /><br /><br />
        <input type='text' placeholder='Designation' value={Designation} onChange={(e) => setDesignation(e.target.value)} required /><br /><br />
        <input type='text' placeholder='Salary' value={Salary} onChange={(e) => setSalary(e.target.value)} required /><br /><br />
        <input type='text' placeholder='State' value={state} onChange={(e) => setState(e.target.value)} required /><br /><br />

        <button type='submit'>Data Updata</button>
      </form><br /><br />
      {responseData && (
        <div>
          <h3>Updated Response:</h3>
          <h2><b>ID:</b>{responseData.id}</h2>
          <h2><b>Name:</b>{responseData.Name}</h2>
          <h2><b>Designation:</b>{responseData.Designation}</h2>
          <h2><b>Salary:</b>{responseData.Salary}</h2>
          <h2><b>State:</b>{responseData.state}</h2>
        </div>
      )}
    </>
  )
}

