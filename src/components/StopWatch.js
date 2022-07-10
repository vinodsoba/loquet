import React, { useState } from 'react'
import Timer from './Timer'
import ControlButtons from './ControlButtons'
import styled from 'styled-components'

const StopWatchStyle = styled.div`
    color: #fff;
    font-size: 2em;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between
`

function StopWatch() {
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);

    React.useEffect (() => {
        let interval = null;

        if ( isActive && isPaused === false ) {
            interval = setInterval(() => {
                setTime((time) => time + 10); 
                }, 10);
            } else {
                clearInterval(interval);
            }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    }

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    }




    return ( 
       <StopWatchStyle>
           <Timer time={time} /> 
           <ControlButtons 
            active={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
           />
        </StopWatchStyle>
     );
}

export default StopWatch;