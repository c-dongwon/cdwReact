import React, { useState } from 'react';
import Test9Sub from './Test9Sub';

const Test9 = () => {
    const [color,setColor] = useState('')
    const [food,setFood] = useState('')
    const onColor = (e) =>{
        setColor(e.target.value)
    }
    const onFood = (e) =>{
        setFood(e.target.value)
    }
    return (
        <div>
            <h2>당신이 좋아하는색은?</h2>
            <div>
                <input type='text' value={color} onChange={onColor}/>
                <p>예) pink,tomato</p>
            </div>

            <h2>당신이 좋아하는음식은?</h2>
            <div>
                <p>
                    <input type='radio' value='갈비' name='food' onChange={onFood}/>
                    <lable>갈비</lable>
                </p>
                <p>
                    <input type='radio' value='불고기' name='food' onChange={onFood}/>
                    <lable>불고기</lable>
                </p>
                <p>
                    <input type='radio' value='제육' name='food' onChange={onFood}/>
                    <lable>제육</lable>
                </p>
            </div>
            <hr/>
            <Test9Sub color={color} food={food}/>
     
        </div>
    );
};

export default Test9;