import React, { useState } from "react";

// 0, 1, 1, 2, 3, 5, 8
const getFibbonaciNumberByIndex = (index) => {
  while (index >= 0) {
    if (index < 2) return index;
    return (
      getFibbonaciNumberByIndex(index - 1) +
      getFibbonaciNumberByIndex(index - 2)
    );
  }
};

export const CourseSandbox = ({ id, title }) => {
  const [input, setInput] = useState(0);
  const output = getFibbonaciNumberByIndex(input);
  return (
    <>
      <label for="inputIndex"> Enter Index:</label>
      <input
        id="inputIndex"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <output name="output" for="inputIndex">
        Fibbonaci number is: {output}
      </output>
    </>
  );
};
