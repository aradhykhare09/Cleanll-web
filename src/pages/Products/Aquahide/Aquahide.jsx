import React, { useEffect } from 'react'
import SmartComfortProduct from './SmartComfortProduct'
import CisternAdv from './CisternAdv'


const Aquahide = () => {
  useEffect(() => {
    document.title = 'Cleanll | AquaHide';
  }, []);

  return (
    <div>
      <SmartComfortProduct/>
      <CisternAdv/>
    </div>
  )
}

export default Aquahide