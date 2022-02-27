import React, { useContext } from 'react';
import { ChangeColorContext } from '../../contexts/ChangeColorContext';

const ChangeColor = () => {
    const { color , onColor } = useContext( ChangeColorContext )
    return (
        <div>
             <h1 style={{color:color}}> changeColor UI 부분: { color }  </h1>
            <p>
                <button onClick={ () => onColor('lime')} >lime</button>
                <button onClick={ () => onColor('yellow')} >yellow</button>
                <button >blue</button>
            </p>
        </div>
    );
};

export default ChangeColor;