import React  from 'react'
import {Row, Col, Container} from 'react-bootstrap'
// import charms
import Mushroom from './../assets/charms-icons/mushroom.png'
import Strawberry from './../assets/charms-icons/Strawberry.png'
import Heart from './../assets/charms-icons/heart.png'
import Butterfly from './../assets/charms-icons/butterfly.png'

import StopWatch from './StopWatch'

import styled from 'styled-components'

const BoardContainer = styled.div `
    max-width: 1400px;
    height: 900px;
    background-color: transparent;
    border-radius: 20px;
    width:100%;
`;

const BoardContainer_Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

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
`;


function Grids() {
    return ( 
        <Container> 
            <Row>    
                <Col md={4}>                   
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

                    <button id="btn__reset">Reset</button>
            
                </Col>
                   
                <Col md={4}>
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
                <img src={Mushroom} draggable="true" />
                <img src={Butterfly} draggable="true" />
                <img src={Strawberry} draggable="true" />
                <img src={Heart} draggable="true" />
                </div>                             
                </Col>
            </Row>     
        </Container>  
    );
}

export default Grids;