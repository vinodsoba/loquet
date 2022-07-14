import React from 'react'

function ControlButtons(props) {
    const StartButton = (
      <div className="btn-start"
      onClick={props.handleStart}>
        Start
      </div>  
    );

    const ActiveButtons = (
        <div className="btn-grp"
        onClick={props.handleReset}>
          Reset
        </div>         
      );

    const ActiveButtonsPause = (
      <div className="btn-grp"
      onClick={props.handlePauseResume}>
        Pause
      </div>
    );
     
    return (  
        <div className='Control-Buttons'>
            <div>{props.active ? ActiveButtons : StartButton }</div>

            <div>{props.active ? ActiveButtonsPause : '' }</div>

        </div>
    );
}

export default ControlButtons;