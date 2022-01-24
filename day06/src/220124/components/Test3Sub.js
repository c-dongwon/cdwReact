import React, { useEffect, useState } from 'react';

const Test3Sub = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const onMove = (e) =>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect( ()=>{
        window.addEventListener('mousemove',onMove)
        return() =>{
            console.log('뒷정리')
            window.addEventListener('mousemove',onMove)
        }
    })
    return (
        <div>
             <h2> 마우스 좌표 </h2>
            <div style={{border:'1px solid #000', width:400 , padding:30 , margin:15 }}>
                <h1>X축 :{x}  / Y축:{y} </h1>
            </div>
        </div>
    );
};

export default Test3Sub;