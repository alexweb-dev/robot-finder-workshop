import React, { useState } from 'react';
import RobotAddress from './RobotAdress';

function RobotCard({ robot }) {
  const [showAddress, setShowAddress] = useState(false);

  const toggleAddress = () => {
    setShowAddress(!showAddress);
  };

  return (
    <div>
      <h2>{robot.name}</h2>
      <img
        src={`https://robohash.org/${robot.id}`}
        alt={`Robot ${robot.name}`}
      />
      <p>Username: {robot.username}</p>
      <p>Phone: {robot.phone}</p>
      <p>Email: {robot.email}</p>
      <p>Website: {robot.website}</p>
      <button onClick={toggleAddress}>
        {showAddress ? 'Hide Address' : 'Show Address'}
      </button>
      {showAddress && (
        <RobotAddress
          suite={robot.address.suite}
          zipcode={robot.address.zipcode}
          city={robot.address.city}
        />
      )}
    </div>
  );
}

export default RobotCard;
