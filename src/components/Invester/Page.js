import React from 'react';
import Sid from './Sid';
import Caat from './Caat';
import Money from './Money';


function Page() {
  return (
    <>
      <div> {/* Replaced 'container' with 'div' for valid HTML */}
        <Sid />
        <Money/>
        <Caat/>

        
      </div>
    </>
  );
}

export default Page;
