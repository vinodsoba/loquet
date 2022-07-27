import React, { Component}  from 'react'
import {Row, Col, Container} from 'react-bootstrap'
// import charms
import Mushroom from './../assets/charms-icons/mushroom.png'
import Strawberry from './../assets/charms-icons/Strawberry.png'
import Heart from './../assets/charms-icons/heart.png'
import Butterfly from './../assets/charms-icons/butterfly.png'

import Timer from './Timer'

import styled from 'styled-components'
// import { renderBoard, sudokuCreate } from '../layout/utils';


const Box = styled.div`
    width: 80px;
    height: 80px;
    border: solid 1px #000;
    margin:5px;
    border-radius: 10px; 
    background-color: #FAFAF8;
    display: flex;
    justify-content: center;
    align-items: center;

@media (max-width: 834px) {
  background-color: #fff !important;
}

@media (max-width: 354px) {
  width: 66px;
  height: 66px;
}
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
const dataGrid = [[1, 0, 0, 2], [0, 0, 4, 0], [0, 1, 0, 3], [0, 3, 0, 4]];
const finalResult = [[1, 4, 3, 2], [3, 2, 4, 1], [4, 1, 2, 3], [2, 3, 1, 4]];

class Grids extends Component {

    img_1 = <img src={Mushroom} draggable="true" alt="" width="80" height="80"/>;
    img_2 = <img src={Butterfly} draggable="true" alt="" width="80" height="80"/>
    img_3 = <img src={Strawberry} draggable="true" alt="" width="80" height="80"/>;
    img_4 = <img src={Heart} draggable="true" alt="" width="80" height="80"/>;
    original_Grid = [...dataGrid];

    constructor() {
        super();
    
        this.state = {
            sudukoPuzzle: dataGrid, selectedIndex: 0, wrongSelection: false,
            blockCell: this.countEmptyCell(), selectedRow: 0, selectedCol: 0, dragEnd: []
        };   
    }

    handleDragOver = (event) => {
        event.preventDefault();
    };

    handleDragStart = (task) => {
        this.state = {
            sudukoPuzzle: dataGrid, selectedIndex: task, wrongSelection: false,
            blockCell: this.countEmptyCell(), selectedRow: 0, selectedCol: 0, dragEnd: [...this.state.dragEnd]
        };
    };

    handleDoneDrop = (event) => {
        const data = event.dataTransfer.getData('id');
    };

    handleToDoDrop = (event, row, col) => {
        let wrongSelection = false;
        const dragEnd = [...this.state.dragEnd];
        if (this.state.sudukoPuzzle[row][col] === 0 && this.state.selectedIndex !== 0) {
            dataGrid[row][col] = this.state.selectedIndex;
            if (finalResult[row][col] !== this.state.selectedIndex) {
                event.target.classList.add('error');
                wrongSelection = true;
            } else if (finalResult[row][col] === this.state.selectedIndex) {
                event.target.classList.remove('error');
                wrongSelection = false;
            }
            dragEnd.push([row, col]);
            this.setState({
                sudukoPuzzle: dataGrid, selectedIndex: 0, wrongSelection: wrongSelection,
                blockCell: this.countEmptyCell(), selectedRow: row, selectedCol: col,
                dragEnd: dragEnd
            });
        } else {
            this.setState({
                sudukoPuzzle: dataGrid, selectedIndex: 0, wrongSelection: wrongSelection, blockCell: this.countEmptyCell(),
                dragEnd: dragEnd
            });
        }
    };

    countEmptyCell = () => {
        const count = dataGrid.toString().split(',').filter(cellPosition => cellPosition !== '0');
        return count.length;
    }

    reversePosition = () => {
        if (this.state.dragEnd.length !== 0) {
            const lastSelection = [...this.state.dragEnd];
            dataGrid[lastSelection[lastSelection.length - 1][0]][lastSelection[lastSelection.length - 1][1]] = 0;
            lastSelection.pop();
            this.setState({
                sudukoPuzzle: dataGrid, selectedIndex: 0, wrongSelection: false,
                blockCell: this.countEmptyCell(), selectedRow: 0, selectedCol: 0,
                dragEnd: lastSelection
            });
        }
    }
        gameReset = () =>{
            if (this.state.dragEnd.length !== 0) {
                console.log('gg')
                this.dataGrid = [...this.original_Grid];
            this.state = {
                sudukoPuzzle: dataGrid, selectedIndex: 0, wrongSelection: false,
                blockCell: this.countEmptyCell(), selectedRow: 0, selectedCol: 0, dragEnd: []
            };
        }
    }
    componentDidMount() {  }
    render() {

    return ( 
        <div className='flex-container'>
            <Container> 
                <Row>    
                    <Col sm={12} md={6} lg={4} className="item1">                   
                    <div className='timer'><Timer time={ this.props.time } /></div>
                        <GridItems>
                            <Row>
                            {
                                this.state.sudukoPuzzle && this.state.sudukoPuzzle.map((res, row) =>

                                (res && res.map((finalRen, col) =>
                                    <Box id={`box_${row}_${col}`} className="box" key={`box_${row}_${col}`} onDragOver={(event) => this.handleDragOver(event)}
                                        onDrop={(e) => this.handleToDoDrop(e, row, col)}>
                                        {finalRen === 1 && this.img_1}
                                        {finalRen === 2 && this.img_2}
                                        {finalRen === 3 && this.img_3}
                                        {finalRen === 4 && this.img_4}
                                    </Box>
                                ))


                                )
                            }
                            </Row>
                            {/* <Row>
                                <Box id="box9" className="box"><img src={Mushroom} draggable="true" /></Box>
                                <Box id="box10" className="box"></Box>
                                <Box id="box11" className="box"><img src={Butterfly} draggable="true" /></Box>
                                <Box id="box12" className="box"></Box>
                        
                                <Box id="box13" className="box"><img src={Heart} draggable="true" /></Box>
                                <Box id="box14" className="box"></Box>
                                <Box id="box15" className="box"></Box>
                                <Box id="box16" className="box"></Box>
                        </Row>  */}

                        </GridItems>     

                            <button id="btn__reset" onClick={this.gameReset}>Reset</button>
                            <button id="btn__reset" onClick={this.reversePosition}>Undo</button>           
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
                    <div className='rounded__box'  onMouseDown={this.props.data}>
                    <div 
                        className="rounded__box--image" 
                        style={{ backgroundImage: `url(${Mushroom})`}}
                        onDragOver={(e) => this.handleDragOver(e)}
                        onDrop={(e) => this.handleDoneDrop(e)}>
                        <img src={Mushroom} alt="" draggable onDragStart={() => this.handleDragStart(1)} />
                             
                    
                    </div>

                    <div 
                        className="rounded__box--image" 
                        style={{ backgroundImage: `url(${Butterfly})`}}
                        draggable="true"
                    >
                        <img src={Butterfly} alt="" draggable onDragStart={() => this.handleDragStart(2)} />
                    </div>

                    <div 
                        className="rounded__box--image" 
                        style={{ backgroundImage: `url(${Strawberry})`}}
                        draggable="true"
                    >
                         <img src={Strawberry} alt="" draggable onDragStart={() => this.handleDragStart(3)} />
                    </div>

                    <div 
                        className="rounded__box--image" 
                        style={{ backgroundImage: `url(${Heart})`}}
                        draggable="true"
                    >
                         <img src={Heart} alt="" draggable onDragStart={() => this.handleDragStart(4)} />
                    </div>

                    </div>
                    
                    
                    </div>                             
                    </Col>
                </Row> 
                {this.state.wrongSelection && <p className='wrongSelection'><span>charms outlined red if placed in wrong position</span></p>}
                {!this.state.wrongSelection && <p className='wrongSelection'><span>board starts with {this.state.blockCell} filled in blocks</span></p>}
             
            </Container>
        </div>
          
    );
  }
}

export default Grids;