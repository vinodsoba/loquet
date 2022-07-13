import React from 'react';

export default class Completed extends React.Component {
    render() {
        return (
            <div className="completed__task">
                <h1>Completed Task</h1>
                <p>You completed it in 0.52 seconds!</p>
                <button></button>

                <div className='form'>
                    Form will go here
                </div>

                <div className="copy">* By signing up you agree with our Terms and Conditions, Privacy Policy. To opt out, click Unsubscribe at the bottom of our emails.</div>
            </div>
            
        )
    }
}
