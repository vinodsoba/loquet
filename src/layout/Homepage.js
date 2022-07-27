import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Grids from '../components/Grids';

import Logo from '../components/Logo';

import BackgroundImg from './../assets/main_desktop_background.png'
import MobileBackgroundImg from './../assets/main_mobile_background.png'


const Wrapper = styled.div `
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;

    @media (max-width: 991px) {
        background-image: url(${MobileBackgroundImg});
        height: auto;

    }
`; 

function Homepage () {
    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);

  // timer 
  useEffect(() => {
    let interval = null;
  
    if(isActive === true){
      interval = setInterval(() => {
        setTime((time) => time +10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  })

  const handleStart = (event) => { 
    event.preventDefault();
    let interval = null;
    if(isActive === false){
      interval = setInterval(() => {
        setTime((time) => time +10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
   }

   const handleReset = () => {
    let interval = null;
    setIsActive(false);
    setTime(0);
    clearInterval(interval);
  };
  
    return (  
        <Wrapper>
            <Logo/>
            <Grids time={time} data={(e) => {handleStart()}} reset={handleReset}/>
        </Wrapper>
    );
}

export default Homepage;
