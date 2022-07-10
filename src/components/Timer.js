import React from 'react'

export default function Timer(props) {
    return (
        <div>    
            <span className='digits min'>{
                ( "0" + Math.floor((props.time / 60000) % 60)).slice(-2)
            }:</span>
            <span className='digits'>{
                ( "0" + Math.floor((props.time / 1000) % 60)).slice(-2)
            }:</span>

            <span className='digits'>{
                ( "0" + Math.floor((props.time / 6000) * 60)).slice(-2)
            }</span>

           

            

           

        </div>
    )
}