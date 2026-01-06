import React, { useEffect } from 'react'
import Product from './Product'
import FeaturesSection from './FeaturesSection'

const Aquasky = () => {
  useEffect(() => {
    document.title = 'Cleanll | AquaSky';
  }, []);

  return (
    <div>
      <Product/>
      <FeaturesSection/>
    </div>
  )
}

export default Aquasky