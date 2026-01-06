import React, { useEffect } from 'react'
import HeroSection from './HeroSection'
import AquaSkySection from './AquaSkySection'
import AquaBreezeSection from './AquaBreezeSection'
import AquaLiteSection from './AquaLiteSection'
import PureOneSection from './PureOneSection'
import AquaHideSection from './AquaHideSection'
import BidetSection from './BidetSection'
// import BannerImage from './BannerImage'
import ExcellenceSection from "./ExcellenceSection";




const Home = () => {
  useEffect(() => {
    document.title = 'Cleanll - Home';
  }, []);

  return (
    <div>
      <HeroSection/>
      <AquaSkySection/>
      <AquaBreezeSection/>
      <AquaLiteSection/>
      <PureOneSection/>
      <AquaHideSection/>
      <BidetSection/>
      <ExcellenceSection />

      {/* <BannerImage/> */}
    </div>
  )
}

export default Home