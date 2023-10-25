import React from 'react';

function RobotAddress({ suite, zipcode, city }) {
  return (
    <div>
      <p>Suite: {suite}</p>
      <p>Zipcode: {zipcode}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default RobotAddress;
