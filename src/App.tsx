import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import OTPInput from "react-otp-input";
import "./App.css";

function App() {
  const [otp, setOtp] = useState("");
  useEffect(() => {
    console.log("otp::: " + otp);
    
  },[otp,setOtp])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="p-2 text-black gap-1">
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            inputStyle={{
              marginLeft: '8px',
              width: '60px',
              height: '60px',
              borderRadius: '4px',
              border: '1px solid #32438d',
            }}
            inputType="tel"
            renderInput={(props) => <input {...props} />}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
