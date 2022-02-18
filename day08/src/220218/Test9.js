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
            <h2>색</h2>
            <div>
                <input type='text' value={color} onChange={onColor}/>
            </div>
            <h2>음식</h2>
            <div>
                <p>
                    <input type='radio' value='갈비' name='food' onChange={onFood}/>
                    <label>갈비</label>
                </p>
                <p>
                    <input type='radio' value='김치' name='food' onChange={onFood}/>
                    <label>김치</label>
                </p>
                <p>
                    <input type='radio' value='짱아찌' name='food' onChange={onFood}/>
                    <label>짱아찌</label>
                </p>
            </div>
            <Test9Sub color={color} food={food}/>
        </div>
    );
};

export default Test9;