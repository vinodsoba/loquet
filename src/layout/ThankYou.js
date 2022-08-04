import React from 'react';
import  { FaShareAlt } from 'react-icons/fa'
import BackgroundImg from './../assets/completion_background_desktop.png'
import MobileBackgroundImg from './../assets/completion_background_mobile.png'
import Logo from '../components/Logo';
import styled from 'styled-components'


const Button = styled.button `
    max-width: ${props => props.formButton || '233px' };
    height: 34px;
    background: #332F2F;
    border-radius: 23px;
    color: #fff;
    position: relative;
    width: 100%;
    margin-top: 2em;
    margin-bottom: 2em;

`;

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

export default class Completed extends React.Component {

    constructor(props){
        super(props);
            this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        alert("button is working");
    }
    
    render() {
        
        return (
            <Wrapper>
                <Logo />
                 <div className="completed__task">
                 <span className='completed__task--counter' >You completed it in 0.52 seconds!</span>
                    <button onClick={this.handleClick}>SHARE <FaShareAlt style={{ position: 'absolute', right: '5px'}} /></button>
                    <div className='form'>
                        <div className='thank__you--container'>
                            <h4>THANKS</h4>
                            <p>We will be in touch if you win!</p>
                            <a href=''>Take me back to Loquet London</a>
                        </div>
                    </div>
                </div>
            </Wrapper>            
        )
    }
}
