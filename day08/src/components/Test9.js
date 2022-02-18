import React, { useState } from 'react';
import Test9Sub from './Test9Sub';

const Test9 = () => {
    const [ color ,setColor ] = useState('')
    const [ food ,setFood ] = useState('')

    const onColor  = (e)  => {
        setColor( e.target.value )
    }
    const onFood  = (e)  => {
        setFood( e.target.value )
    }

    return (
        <div>
            <h2>당신이 좋아하는 색은?</h2>
            <div>
                <input type="text" value={color} onChange={ onColor } />
                <p>예) pink, tomato, orange, skyblue </p>
            </div>

            <h2>당신이 좋아하는 음식은?</h2>
            <div>
                <p>
                    <input type="radio" value="갈비" name="food" onChange={onFood}/>
                    <label>갈비</label>
                </p>
                <p>
                    <input type="radio" value="불고기" name="food" onChange={onFood}/>
                    <label>불고기</label>
                </p>
                <p>
                    <input type="radio" value="비빔밥" name="food" onChange={onFood}/>
                    <label>비빔밥</label>
                </p>
            </div>
            <hr/>
            <Test9Sub  color={color} food={food} />
        </div>
    );
};

export default Test9;