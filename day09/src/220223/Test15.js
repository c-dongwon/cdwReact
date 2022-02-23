import React, { useCallback, useState } from 'react';
import Test15Count from './Test15Count';
import Test15Title from './Test15Title';

const Test15 = () => {
    const [age,setAge] = useState(20)
    const [money,setMoney] = useState(1000000)
    const onAge = useCallback(() =>{
        setAge(age + 1)
    },[age])
    const onMoney = useCallback(() =>{
        setMoney(money +60000) 
    },[money])
    return (
        <div>
            <Test15Title/>
            <Test15Count count={age} text='나이'/>
            <button onClick={onAge}>나이증가</button>
            <Test15Count count={money} text='급여'/>
            <button onClick={onMoney}>급여증가</button>
        </div>
    );
};
//export default React.memo(Test15Title); 변하지않으면 호출안함
export default Test15;