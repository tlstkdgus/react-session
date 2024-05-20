import React,{useState, useEffect} from 'react';

const TimerComponent = () =>{
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
       const interval = setInterval(()=>{
        setSeconds(prev => prev+1);
       },1000);

       return() => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>타이머</h2>
            <p>경과 시간: {seconds} 초 </p>
        </div>
    )
}

export default TimerComponent;