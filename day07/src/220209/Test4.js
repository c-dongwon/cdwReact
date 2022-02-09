import React from 'react';
import './Test4.css'
import dwStyle from './Test4.module.css'
const Test4 = () => {
    return (
        <div className='wrap'>
            <div className='box'></div>
            <div className='box'></div>
            <div className={dwStyle.box}></div>
            <div className={dwStyle.box}></div>
            {/* 클래스 여려개 */}
            <div className='size bg'></div>
            <div className={`${dwStyle.size} ${dwStyle.bg}`}></div>
            <div className={`size ${dwStyle.size} bg`}></div>

            {/* 다중 클래스 */}
            <div className={[dwStyle.size,dwStyle.box,'bg'].join(' ')}></div>

            {/* module.css에 추가로 일반 class명으로 작성해서 사용하고싶을때 :global .mybox */}
            <div className='mybox'></div>
        </div>
    );
};

export default Test4;