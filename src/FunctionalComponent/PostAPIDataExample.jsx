
// Fetch ke sath API me Data bhejna aur Axios k sath  API pr Data bhejna

// import React, { useState } from "react";
// import axios from "axios";
// const PostDataExample = () => {
//   const [Name, setName] = useState("");
//   const [Salary,setSalary]=useState("");
//   const [Designation, setDesignation] = useState("");
//   const [responseData, setResponseData] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // पेज रिफ्रेश रोकने के लिए

//     const newPost = { Name, Designation, Salary,userId: 1 }; // API को भेजने के लिए डेटा

//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST", // HTTP POST method
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newPost), // js string ko JSON format me change krna
//       });

//       const result = await response.json();
//       setResponseData(result); // API se response store

//       // input field blank krna
//       setName("");
//       setDesignation("");
//       setSalary("");
//     } catch (error) {
//       console.error("Data Send In Error:", error);
//     }
//   };
import React, { useState } from "react";
import axios from "axios";
const PostDataExample = () => {
  const [Name, setName] = useState("");
  const [Salary, setSalary] = useState("");
  const [Designation, setDesignation] = useState("");
  const [responseData, setResponseData] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { Name, Salary, Designation, userId: 1 };

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
      setResponseData(response.data);
    } catch (error) {
      console.error("Data Send In Error:", error);
    }
  };
  return (
    <>
      <h2 className="back">API Send Data(POST Request)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />
        <input
          type="text"
          placeholder="Salary"
          value={Salary}
          onChange={(e) => setSalary(e.target.value)}
          required
        /><br /><br />
        <textarea
          placeholder="Designation"
          value={Designation}
          onChange={(e) => setDesignation(e.target.value)}
          required
        ></textarea>
        <br />
        <br />
        <button type="submit" className="bg-success">API Data Post</button>
      </form>

      {responseData && (
        <div>
          <h3>Response:</h3>
          <p><b>ID:</b> {responseData.id}</p>
          <p><b>Name:</b> {responseData.Name}</p>
          <p><b>Salary:{responseData.Salary}</b></p>
          <p><b>Designation:</b> {responseData.Designation}</p>
        </div>
      )}
    </>
  );
};

export default PostDataExample;
//अगर आपको API पर नया डेटा भेजना (POST request) करना है, तो आप fetch या axios का उपयोग कर सकते हैं। नीचे दोनों के उदाहरण दिए गए हैं।
// कैसे काम करता है?

// 1. यूज़र title और body डालता है।
// 2. फॉर्म सबमिट करने पर handleSubmit() चलता है।
// 3. API पर POST Request भेजी जाती है।
// 4. Response से नया डेटा स्टेट में सेव होता है।
// 5. फॉर्म इनपुट्स रीसेट हो जाते हैं।

// 📌 मुख्य बातें
// ✅ fetch() और axios() दोनों से API को डेटा भेज सकते हैं।
// ✅ POST Request के लिए method: "POST" देना ज़रूरी है।
// ✅ JSON डेटा भेजने के लिए JSON.stringify(newPost) करना ज़रूरी है।
// ✅ headers: { "Content-Type": "application/json" } API को बताने के लिए होता है कि हम JSON भेज रहे हैं।
// ✅ यूज़र द्वारा डाले गए डेटा को स्टेट में सेव और रिसेट किया जाता है।