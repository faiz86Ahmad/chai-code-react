
import React, { useState } from 'react';


  const ToggleDiv = () => {

    const [isVisible, setIsVisible] = useState(true);
  
    const toggleVisibility = () => {

      setIsVisible(!isVisible);
    };
  
  
 
  return (
    <>
     
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'} Div
      </button>
      {isVisible && (
        <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
          This is the content inside the div.
        </div>
      )}
    </div>
 


     
    </>
  )
}

export default ToggleDiv
