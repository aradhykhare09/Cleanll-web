import React, { useEffect } from 'react'
import ToiletBidetProduct from './ToiletBidetProduct'
import IconShowcase from './IconShowcase'
import BidetAdv from './BidetAdv'


const Bidet = () => {
  useEffect(() => {
    document.title = 'Cleanll | Bidet';
  }, []);

  return (
    <div>
      <ToiletBidetProduct/>
      <IconShowcase/>
      <BidetAdv/>
    </div>
  )
}

export default Bidet