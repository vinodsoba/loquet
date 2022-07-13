import React from 'react';
import styled from 'styled-components'
import DragAndDrop from '../components/DragAndDrop';

import Logo from '../components/Logo';

import BackgroundImg from './../assets/main_desktop_background.png'
import MobileBackgroundImg from './../assets/main_mobile_background.png'


const Wrapper = styled.div `
    background-image: url(${BackgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;

    @media (max-width: 834px) {
        background-image: url(${MobileBackgroundImg});
        height: 100%;

    }
`; 

export default class Homepage extends React.Component {
    render() {
        return (  
            <Wrapper>
               <Logo/>
               <DragAndDrop />
            </Wrapper>
        );
    }
    
}

