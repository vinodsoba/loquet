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
                    <p>You completed it in 0.52 seconds!</p>
                    <button onClick={this.handleClick}>SHARE <FaShareAlt style={{ position: 'absolute', right: '5px'}} /></button>

                    <div className='form'>
                        <h4>WIN A LOCKET</h4>
                        <p>Sign up below to be in with the chance to win a 14kt locket necklace.</p>

                        <div className='form-fields'>
                            <h5>Email</h5>
                            <h5>First Name</h5>
                            <h5>Last Name</h5>
                            <h5>I live in</h5>
                            <div className='captcha'>Captcha goes here</div>
                            <Button formButton="490px">SUBMIT</Button>
                        </div>
                    </div>

                    <div className="copy">* By signing up you agree with our Terms and Conditions, Privacy Policy. To opt out, click Unsubscribe at the bottom of our emails.</div>
                </div>
            </Wrapper>            
        )
    }
}
