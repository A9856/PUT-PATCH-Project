import React from "react"
import React from "react"
//import FetchDataExample from "./FunctionalComponent/FetchDataExample"
//import PostDataExample from "./FunctionalComponent/PostAPIDataExample"
//import PutUpdataExample from "./FunctionalComponent/PutUpdataExample"

import PatchUpdateExample from "./FunctionalComponent/PatchUpdateExample"
import { BrowserRouter } from "react-router-dom"
export default function App() {
  return (
    <div>
        <BrowserRouter basename="/Project-PUT-PATCH">
        {/* <div className="bg-secondary">
        <h1>Hello World</h1>
        </div> */}
        {/* <FetchDataExample/> */}
        {/* <PostDataExample /> */}
        {/* <PutUpdataExample/> */}
        <PatchUpdateExample/>
        </BrowserRouter>
    </div>
  )
}
