import React, { useEffect } from 'react'
import NatureProduct from './Product'
import SmartFeaturesSection from './SmartFeaturesSection'

const Aqualite = () => {
  useEffect(() => {
    document.title = 'Cleanll | AquaLite';
  }, []);

  return (
    <div>
      <NatureProduct/>
      <SmartFeaturesSection/>
    </div>
  )
}

export default Aqualite