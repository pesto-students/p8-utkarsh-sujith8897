import React, { useState } from "react";

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    setInputValue(value);
    setValue("");
  };
  return (
    <div className="inputContainer">
      <h1>
        Short<span>.ly</span>
      </h1>
      <form onSubmit={handleClick}>
        <div>
          <input
            type="url"
            placeholder="Paste a link to shorten"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button type="submit">shorten</button>
        </div>
      </form>
    </div>
  );
};

export default InputShortener;
