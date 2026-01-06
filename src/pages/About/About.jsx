import React, { useEffect } from 'react'
import FoundersLegacy from './FoundersLegacy'
import VisionMission from './VisionMission'
import CoreValues from './CoreValues'

const About = () => {
  useEffect(() => {
    document.title = 'Cleanll | About Us';
  }, []);

  return (
    <div>
      <FoundersLegacy/>
      <VisionMission/>
      <CoreValues/>
    </div>
  )
}

export default About