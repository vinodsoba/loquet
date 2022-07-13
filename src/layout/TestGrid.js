import React from 'react';
import  DragAndDrop from '../components/DragAndDrop';

export default class TestGrid extends React.Component {
    render() {
        return (
            <div className="grid">
                <h1>New Grid Layout</h1>
                <DragAndDrop />
            </div>
            
        )
    }
}
