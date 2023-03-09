import React ,{useEffect}from 'react'
import HeroSection from '../components/HeroSection'
import { useGlobalContext } from '../context';

const about = () => {
 /* const data = {
    name:"ABOUT PAGE",
    image:"./images/logo.svg"
  };*/
  const {updateAboutPage} = useGlobalContext();
  useEffect(() => updateAboutPage(), []);
  
  return <HeroSection/>;
}

export default about