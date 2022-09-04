import { useState } from 'react';

function LockView() {
  let [lockState, setLockState] = useState({
    locked: true,
    battery_level: 78,
    codes: [
      { name: 'Abby', code: '1234' },
    ]
  });

  return (
    <p>
      State: {lockState.locked ? 'Locked' : 'Unlocked'}
      <br/>
      <button
        onClick={() => setLockState({...lockState, locked: !lockState.locked})}
      >
        Toggle lock
      </button>
    </p>
  );
}

export default LockView;
