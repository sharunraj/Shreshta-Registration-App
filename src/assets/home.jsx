import { useEffect } from 'react';
import HeroSection from '../components/HeroSection'
import { useGlobalContext } from '../context'

const home = () => {
  
  /*const data = {
    name:"REGISTRATION APP",
    image:"./images/logo.svg"
  }

*/
const {updateHomePage} = useGlobalContext();
useEffect(() => updateHomePage(), []);
  return <HeroSection  />;
};

export default home