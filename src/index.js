import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [databook, setdatabook] = useState(null);
  function getdata() {
    fetch(apiURL)
      .then(resp => resp.json())
      .then(data => {
        setdatabook(data);
      });
  }
  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={getdata}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
        {databook &&
          databook.map((databook, index) => {
            const writers = databook.authors.join(", ");
            const formateddate = new Date(databook.released).toDateString();

            return (
              <div className="book" key={index}>
                <h3>{index + 1}</h3>
                <h2>{databook.name}</h2>

                <div className="details">
                  <p>👨: {writers}</p>
                  <p>📖: {databook.numberOfPages}</p>
                  <p>🏘️: {databook.country}</p>
                  <p>⏰: {formateddate}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
