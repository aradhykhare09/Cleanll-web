import React, { useEffect } from 'react'
import PureOneProduct from './PureOneProduct'
import PureOneFeatures from './PureOneFeatures'

const Pureone = () => {
  useEffect(() => {
    document.title = 'Cleanll | PureOne';
  }, []);

  return (
    <div>
      <PureOneProduct/>
      <PureOneFeatures/>
    </div>
  )
}

export default Pureone