import React, { useEffect } from 'react'
import SpaceProduct from './Product'
import ComfortFeaturesSection from './ComfortFeaturesSection'

const Aquabreeze = () => {
  useEffect(() => {
    document.title = 'Cleanll | AquaBreeze';
  }, []);

  return (
    <div>
      <SpaceProduct/>
      <ComfortFeaturesSection/>
    </div>
  )
}

export default Aquabreeze