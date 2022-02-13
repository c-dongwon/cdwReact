import React, { useMemo } from 'react';

const getColor = (color) =>{
    console.log('getColor')
    switch(color){
        case 'pink' : return '분홍색입니다';
        case 'tomato' : return '토마토입니다';
        case 'blue' : return '블루입니다';
        case 'red' : return 'red입니다';
        default : return '모르겠네요'
    }
}
const getFood = (food) =>{
    console.log('getFood')
    switch(food){
        case '갈비' : return '갈비입니다';
        case '불고기' : return '불고기입니다';
        case '제육' : return '제육입니다';
        default : return '모르겠네요'
    }
}
const Test9Sub = ({color,food}) => {
    // const colorInfo = getColor(color)
    // const foodInfo = getFood(food)

    const colorInfo = useMemo(()=> getColor(color),[color])
    const foodInfo = useMemo(()=> getFood(food),[food])
    return (
        <div>
            <p>좋아하는색 : {color}</p>
            <p>색설명 : {colorInfo}</p>
            <hr/>
            <p>좋아하는음식 : {food}</p>
            <p>음식설명:{foodInfo}</p>
        </div>
    );
};

export default Test9Sub;