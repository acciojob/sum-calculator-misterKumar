import React, { useState, useEffect } from 'react';

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    // Calculate the sum whenever the 'numbers' state changes
    calculateSum();
  }, [numbers]);

  const calculateSum = () => {
    // Simulate an asynchronous operation to prevent UI freezing
    setTimeout(() => {
      // Calculate the sum of all numbers
      const newSum = numbers.reduce((acc, num) => acc + num, 0);
      setSum(newSum);
    }, 0);
  };

  const handleInputChange = (e) => {
    const inputValue = Number(e.target.value);
    if (!isNaN(inputValue)) {
      setNumbers([...numbers, inputValue]);
    }
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={handleInputChange}
      />
      <p >Sum: {sum}</p>
    </div>
  );
}

export default SumCalculator;

