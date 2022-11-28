import React, { useState } from "react";
import "./Dictyonary.css";
import Result from "./Result.js";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result,setResult]= useState(null);
  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0]);
  }
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true} />
      </form>
      <Result result={result}/>
    </div>
  );
}
