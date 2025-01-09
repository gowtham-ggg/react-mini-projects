import React, { useState } from 'react';

const PasswordGenerator = () => {
    const [length , setLength] = useState(8);
    const [includeUpper, setIncludeUpper] = useState(true);
    const [includeLower, setIncludeLower] = useState(true);
    const [includeNumbers, setIncludeNumbers] =useState(true);
    const [includeSymbols, setIncludeSymbols] = useState(true);
    const [password, setPassword] = useState("");

    const generatePassword = ()=>{
        let charSet = "";
        if(includeUpper){charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"};
        if(includeLower){charSet += "abcdefghijklmnopqrstuvwxyz"};
        if(includeNumbers){charSet += "0123456789"};
        if(includeSymbols){charSet += "~!@#$%^&*+_-)(?"};
        
        let pass = "";
        for(let i =0; i<length; i++){
            let randomChar = charSet[Math.floor(Math.random()*charSet.length)];
            pass += randomChar;
        }
        setPassword(pass);
    };
    const copyToClipboard = ()=>{
        navigator.clipboard.writeText(password);
        alert("Password Copied");
    }
  return (
    <div className="password-generator">
      <h1>Password Generator</h1>

      <div className="form-group">
        <label htmlFor="password-length">Length of Password</label>
        <input type="number" id="password-length" className="input-control" value={length} onChange={(e)=>{setLength(e.target.value)}} />
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="include-uppercase" checked={includeUpper} onChange={(e)=>setIncludeUpper(e.target.checked)} />
        <label htmlFor="include-uppercase">Include Uppercase Letters</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="include-lowercase" checked={includeLower} onChange={(e)=>setIncludeLower(e.target.checked)} />
        <label htmlFor="include-lowercase">Include Lowercase Letters</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="include-numbers" checked={includeNumbers} onChange={(e)=>setIncludeNumbers(e.target.checked)}  />
        <label htmlFor="include-numbers">Include Numbers</label>
      </div>

      <div className="checkbox-group">
        <input type="checkbox" id="include-symbols" checked={includeSymbols} onChange={(e)=>setIncludeSymbols(e.target.checked)}  />
        <label htmlFor="include-symbols">Include Symbols</label>
      </div>

      <button className="generate-button" onClick={generatePassword}>Generate Password</button>

      <div className="output-container">
        <label htmlFor="generated-password">Generated Password</label>
        <input type="text" id="generated-password" readOnly className="output-control" value={password} />
        <button className='copy' onClick={copyToClipboard}>COPY</button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
