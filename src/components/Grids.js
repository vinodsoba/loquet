import React  from 'react'
import {Row, Col, Container} from 'react-bootstrap'
// import charms
import Mushroom from './../assets/charms-icons/mushroom.png'
import Strawberry from './../assets/charms-icons/Strawberry.png'
import Heart from './../assets/charms-icons/heart.png'
import Butterfly from './../assets/charms-icons/butterfly.png'

import StopWatch from './StopWatch'

import styled from 'styled-components'


const Box = styled.div`
    width: 80px;
    height: 80px;
    border: solid 1px #000;
    margin:5px;
    border-radius: 10px; 
    opacity: 0.3;
    background-color: beige;
`;


const GridItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 365px;
  width: 100%;


    @media (max-width: 834px) {

    }
`;


function Grids() {
    return ( 
        <div className='flex-container'>
            <Container> 
                <Row>    
                    <Col sm={12} md={6} lg={4} className="item1">                   
                        <div className="timer"><StopWatch /></div>
                    
                        <GridItems>
                            <Row>
                                <Box id="box1" className="box"><img src={Strawberry} draggable="true" /></Box>
                                <Box id="box2" className="box"></Box>
                                <Box id="box3" className="box"></Box>
                                <Box id="box4" className="box"></Box>                                          
                            
                                <Box id="box5" className="box"></Box>
                                <Box id="box6" className="box"><img src={Heart} draggable="true" /></Box>
                                <Box id="box7" className="box"></Box>
                                <Box id="box8" className="box"><img src={Mushroom} draggable="true" /></Box>
                            </Row>
                            <Row>
                                <Box id="box9" className="box"><img src={Mushroom} draggable="true" /></Box>
                                <Box id="box10" className="box"></Box>
                                <Box id="box11" className="box"><img src={Butterfly} draggable="true" /></Box>
                                <Box id="box12" className="box"></Box>
                        
                                <Box id="box13" className="box"><img src={Heart} draggable="true" /></Box>
                                <Box id="box14" className="box"></Box>
                                <Box id="box15" className="box"></Box>
                                <Box id="box16" className="box"></Box>
                            </Row>    
                        </GridItems>                
                    </Col>
                    <Col lg={1}></Col>
                    <Col sm={12} md={10} lg={5} className="item2">
                    <div className="help__guide">
                        <div className="help__guide--headline">
                            <h4>HOW TO PLAY</h4>
                        </div>
                        <div className="help__guide--paragraph">
                            <p>Logic based, charm placement puzzle. 
                                The objective is to fill 6x6 grid with charms, so that each column, each row and each of the none 3x3 subgrids contain all 9 charms.
                            </p>
                        </div>
                    </div>  
                    <div>
                    <div className="help__guide--headline">
                            <h4>DRAG AND DROP CHARMS</h4>
                        </div>
                    <div className='rounded__box'>
                    <div 
                        className="rounded__box--image" 
                        style={{ backgroundImage: `url(${Mushroom})`}}
                        draggable="true"
                    >
                    </div>

                    <div 
                        className="rounded__box--image" 
                        style={{ backgroundImage: `url(${Butterfly})`}}
                        draggable="true"
                    >
                    </div>

                    <div 
                        className="rounded__box--image" 
                        style={{ backgroundImage: `url(${Strawberry})`}}
                        draggable="true"
                    >
                    </div>

                    <div 
                        className="rounded__box--image" 
                        style={{ backgroundImage: `url(${Heart})`}}
                        draggable="true"
                    >
                    </div>

                    </div>
                    
                    
                    </div>                             
                    </Col>
                </Row>     
            </Container>
        </div>
          
    );
}

export default Grids;