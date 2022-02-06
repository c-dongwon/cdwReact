import React from 'react';
import './Test4.css'
import myStyle from './Test4.module.css'

const Test4 = () => {
    return (
        <div className='wrap'>
            <div className='box'></div>
            <div className='box'></div>
            <div className={myStyle.box}></div>
            <div className={myStyle.box}></div>

            {/* 클래스여러개 */}
            <div className='size bg'></div>
            <div className={`${myStyle.size} ${myStyle.bg}`}></div>
            <div className={`size ${myStyle.size} bg`}></div>

            {/* 다중 클래스 */}
            <div className={[myStyle.size,myStyle.box,'bg'].join(' ')}></div>

            {/* module.css에 추가로 일반 class명으로 작성해서 사용하고싶을때 :global .mybox*/}
            <div className="mybox"></div>
        </div>
    );
};

export default Test4;