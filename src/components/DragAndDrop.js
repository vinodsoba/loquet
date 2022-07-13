import React from "react";
import {Row, Col, Container} from 'react-bootstrap'

import StopWatch from './StopWatch'

import styled from 'styled-components'
// import charms

import Strawberry from './../assets/charms-icons/Strawberry.png';
import Heart from './../assets/charms-icons/heart.png';
import Mushroom  from './../assets/charms-icons/mushroom.png';
import Butterfly  from './../assets/charms-icons/butterfly.png';

const Box = styled.div`
    width: 80px;
    height: 80px;
    border: solid 1px #000;
    margin:5px;
    border-radius: 10px; 
    background-color: #fff;
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



export default class DragAndDrop extends React.Component {
  state = {
    tasks: [
    { name: "mushroom", category: "wip", bgcolor: "brown", image: `${Mushroom}`},
    { name: "butterfly", category: "wip", bgcolor: "yellow", image: `${Butterfly}`},
    { name: "strawberry", category: "wip", bgcolor: "red", image: `${Strawberry}`},
    { name: "heart", category: "wip", bgcolor: "red", image: `${Heart}` },
      
    ]
  };

  onDragStart = (ev, id) => {
    console.log("dragstart", id);
    ev.dataTransfer.setData("id", id);
  };

  onDragOver = (ev) => {
    ev.preventDefault();
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
      }

      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  };

  render() {
    var tasks = {
      wip: [],
      mushroom: [],
      complete: []
    };

    this.state.tasks.forEach((t) => {
      tasks[t.category].push(
    <div className="rounded__box">
        <div
          key={t.name}
          onDragStart={(e) => {
            this.onDragStart(e, t.name);
          }}
          draggable
          className="box"
        >
          <img src={t.image} alt="" />
        </div>

    </div>
        
      );
    });

    return (
      <div>
        <div className='flex-container'>
        <Container> 
            <Row> 
                <Col sm={12} md={6} lg={4} className="item1"> 
                    <div className="timer"><StopWatch /></div>

                    <GridItems>
                        <Row>
                            <Box id="box1" className="box"><img src={Strawberry} draggable="true" /></Box>
                            
                            <Box id="box2" className="box" 
                            onDragOver={(e) => {this.onDragOver(e)}} 
                            onDrop={(e) => {this.onDrop(e, "mushroom");}}>
                                {tasks.mushroom}
                                
                            </Box>

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
                    <div
                        
                        onDragOver={(e) => {
                          this.onDragOver(e);
                        }}
                        onDrop={(e) => {
                          this.onDrop(e, "wip");
                        }}
                    >
                        <div 
                        className="help__guide--headline">
                                <h4>DRAG AND DROP CHARMS</h4>
                        </div>
                        <div className='rounded__box'>{tasks.wip}</div>                    
                    </div>                             
                </Col>
            </Row>
        </Container>    
        </div>
      </div>
    );
  }
}
