
// API se DATA LENA AUR AXIOS KE SATH API CALL KRNA
//  
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// const FetchDataExample = () => {
//     const [data, setData] = useState([]); // डेटा स्टोर करने के लिए स्टेट
//     const [loading, setLoading] = useState(true); // लोडिंग स्टेट

//   useEffect(() => {
//     // API से डेटा लाने के लिए फ़ंक्शन
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const result = await response.json();
//         setData(result); // डेटा स्टेट में सेव करें
//       } catch (error) {
//         console.error("डेटा लाने में त्रुटि:", error);
//       } finally {
//         setLoading(false); // डेटा आने के बाद लोडिंग बंद करें
//       }
//     };

//     fetchData(); // फ़ंक्शन को कॉल करें

//   }, []); // खाली dependency array का मतलब useEffect सिर्फ़ एक बार चलेगा (माउंट पर)
import React, { useState, useEffect } from "react";
import axios from "axios";
const FetchDataExample = () => {
    const [data, setData] = useState([]); // डेटा स्टोर करने के लिए स्टेट
    const [loading, setLoading] = useState(true); // लोडिंग स्टेट
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setData(response.data);
            } catch (error) {
                console.error("डेटा लाने में त्रुटि:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <h2>API से डेटा प्राप्त करना</h2>
            {loading ? (
                <p>लोड हो रहा है...</p>
            ) : (
                <ul>
                    {data.slice(0, 99).map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default FetchDataExample;
