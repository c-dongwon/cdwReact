import React from 'react';
import testClass from './Test6.module.scss'

const Test6 = () => {
    return (
        <div className={testClass.cont}>
            <p className={testClass.tit}>scss module연습</p>
            <button className={testClass.btn}>확인</button>
        </div>
    );
};

export default Test6;