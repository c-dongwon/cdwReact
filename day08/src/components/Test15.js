import React, { useCallback, useState } from 'react';
import Test15Count from './Test15Count';
import Test15Title from './Test15Title';

const Test15 = () => {
    const [age,setAge] = useState(20)
    const [money,setMoney] = useState(100000)
    const onAge = useCallback(() =>{
        setAge(age + 1)
    },[age])
    const onMoney = useCallback(() =>{
        setMoney(money + 60000)
    },[money])
    return (
        <div>
            <Test15Title/>
            <Test15Count count={age} text='나이'/>
            <button onClick={onAge}>나이증가</button>
            <hr/>
            <Test15Count count={money} text='급여'/>
            <button onClick={onMoney}>급여증가</button>
        </div>
    );
};

export default Test15;

//React.memo는 변하는값만 출력시킨다 안하면 변하지않는 모든 자식값이 호출됨