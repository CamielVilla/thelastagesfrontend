import React from "react";
import './App.css';
import information from "../src/Assets/Spelinformatie.png"

function App() {
  return (
      <>
      <div className="homepage">
          <div className="header-container">
      <header className='header'>
          <h1>The Last Ages</h1>
          <h2>a real-time strategy board game</h2>
      </header>
          </div>
          <div className='form-container'>
          <form onSubmit={console.log("hij doet het")}>
              <h3>Leave your e-mail for more information</h3>
              <input
                  name="email-adres"
                  type="email"
                  placeholder="your e-mail address"
                />
              <button type="submit">send</button>
          </form>
          </div>
          <div className="bottom-container">
              <img src={information} alt="information-image" className="info-image" />
          </div>
      </div>
      </>
)
}

export default App;
