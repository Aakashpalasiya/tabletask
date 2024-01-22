import React, { useState, useEffect } from 'react';

const SampleDataComponent = () => {
  const sampleData = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'John' },
    { id: 4, name: 'Alice' },
    { id: 5, name: 'Neel' },
    { id: 6, name: 'Alice' },
    { id: 7, name: 'John' },
    { id: 8, name: 'Eve' },
    { id: 9, name: 'Jane' },
    { id: 10, name: 'Alice' },
    { id: 11, name: 'John' },
    { id: 12, name: 'Jane' },
    { id: 13, name: 'Alice' },
    { id: 14, name: 'John' },
    { id: 15, name: 'Alice' },
    { id: 16, name: 'Neel' },
    { id: 17, name: 'Alice' },
    { id: 18, name: 'John' },
    { id: 19, name: 'Eve' },
    { id: 20, name: 'Alice' },
    { id: 21, name: 'Dave' },
    { id: 22, name: 'Jill' },
    { id: 23, name: 'Alice' },
    { id: 24, name: 'Neel' },
    { id: 25, name: 'Alice' },
    { id: 26, name: 'John' },
    { id: 27, name: 'Eve' },
    { id: 28, name: 'Jane' },
    { id: 29, name: 'Alice' },
    { id: 30, name: 'John' },
    { id: 31, name: 'Alice' },
    { id: 32, name: 'Nourk' },
    { id: 33, name: 'Alice' },
    { id: 34, name: 'John' },
    { id: 35, name: 'Eve' },
    { id: 36, name: 'Jane' },
    { id: 37, name: 'Alice' },
    { id: 38, name: 'John' },
    { id: 39, name: 'Jane' },
    { id: 40, name: 'Alice' },
    { id: 41, name: 'John' },
    { id: 42, name: 'Alice' },
    { id: 43, name: 'Ritz' },
    { id: 44, name: 'Alice' },
    { id: 45, name: 'John' },
    { id: 46, name: 'Eve' },
    { id: 47, name: 'Jane' },
    { id: 48, name: 'Alice' },
    { id: 49, name: 'John' },
    { id: 50, name: 'Jane' },
    { id: 51, name: 'Alice' },
    { id: 52, name: 'John' },
    { id: 53, name: 'Alice' },
    { id: 54, name: 'Gold' },
    { id: 55, name: 'Alice' },
    { id: 56, name: 'John' },
    { id: 57, name: 'Eve' },
    { id: 58, name: 'Jane' },
    { id: 59, name: 'Alice' },
    { id: 60, name: 'John' },
    { id: 61, name: 'Alice' },
    { id: 62, name: 'Sonz' },
    { id: 63, name: 'Alice' },
    { id: 64, name: 'John' },
    { id: 65, name: 'Eve' },
    { id: 66, name: 'Jane' },
    { id: 67, name: 'Alice' },
    { id: 68, name: 'John' },
    { id: 69, name: 'Jane' },
    { id: 70, name: 'Alice' },
    { id: 71, name: 'John' },
    { id: 72, name: 'Alice' },
    { id: 73, name: 'Neel' },
    { id: 74, name: 'Alice' },
    { id: 75, name: 'John' },
    { id: 76, name: 'Eve' },
    { id: 77, name: 'Jane' },
    { id: 78, name: 'Alice' },
    { id: 79, name: 'John' },
    { id: 80, name: 'Jane' },
    { id: 81, name: 'Alice' },
    { id: 82, name: 'John' },
    { id: 83, name: 'Alice' },
    { id: 84, name: 'Neel' },
    { id: 85, name: 'Alice' },
    { id: 86, name: 'John' },
    { id: 87, name: 'Eve' },
    { id: 88, name: 'Jane' },
    { id: 89, name: 'Alice' },
    { id: 90, name: 'John' },
    { id: 91, name: 'Alice' },
    { id: 92, name: 'Viz' },
    { id: 93, name: 'Alice' },
    { id: 94, name: 'John' },
    { id: 95, name: 'Eve' },
    { id: 96, name: 'Jane' },
    { id: 97, name: 'Alice' },
    { id: 98, name: 'John' },
    { id: 99, name: 'Jane' },
    { id: 100, name: 'Alice' },
    { id: 100, name: 'Alice' },
    // Add more data as needed
  ];
  
  
  

  // State to store distinct names and their duplication counts
  const [distinctNames, setDistinctNames] = useState([]);

  // Function to calculate duplication counts and set distinct names
  const calculateDistinctNames = () => {
    const nameCounts = {};
    sampleData.forEach((data) => {
      nameCounts[data.name] = (nameCounts[data.name] || 0) + 1;
    });

    const distinctNamesArray = Object.entries(nameCounts).map(([name, count]) => ({
      name,
      count,
    }));

    setDistinctNames(distinctNamesArray);
  };

  useEffect(() => {
    calculateDistinctNames();
  }, []);

  // Function to determine background color based on duplication count
  const getBackgroundColor = (count) => {
    if (count > 0 && count < 3) {
      return 'red';
    } else if (count >= 3 && count < 10) {
      return 'yellow';
    } else if (count >= 10) {
      return 'green';
    }
    return ''; // Default background color
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Duplication Count</th>
          </tr>
        </thead>
        <tbody>
          {distinctNames.map((item) => (
            <tr key={item.name} style={{ backgroundColor: getBackgroundColor(item.count) }}>
              <td>{item.name}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SampleDataComponent;
