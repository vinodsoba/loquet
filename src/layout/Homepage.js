import React from 'react';
import styled from 'styled-components'
import Grids from '../components/Grids';
import Logo from '../components/Logo';

import BackgroundImg from './../assets/main_desktop_background.png'



const Wrapper = styled.div `
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
`; 



function Homepage () {
    return (  
        <Wrapper>
           <Logo/>
           <Grids />
        </Wrapper>
    );
}

export default Homepage;