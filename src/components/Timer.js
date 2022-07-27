
export default function Timer( props ) {

    return (
      <div className="timer">
          <span className="hours">
          {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}
          </span>
          <span>:</span>
          <span className='mins'>
          {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
          </span>
          <span>:</span>
          <span className='seconds'>
          {("0" + ((props.time / 10) % 100)).slice(-2)}
          </span>
      </div>
    )
  }