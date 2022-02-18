import React, { useMemo } from 'react';

const getColor = (color) =>{
    console.log('색색')
    switch(color){
        case '핑크' : return '핑크핑크';
        case '레드' : return '레드레드';
        case '블루' : return '블루블루';
        default : return '해당내용없음'
    }
}
const getFood = (food) =>{
    console.log('음식')

    switch(food){
        case '갈비' : return '갈비갈비'
        case '김치' : return '김치김치'
        case '짱아찌' : return '짱아짱아'

    }
}
const Test9Sub = ({color,food}) => {
    const colorInfo = useMemo(()=>{
        return getColor(color)
    },[color])

    const foodInfo = useMemo(()=>getFood(food),[food])
    return (
        <div>
               <h4>좋아하는 색 : { color } </h4>
            <h5>설 설명 :{colorInfo}</h5>
            <hr />
            <h4>좋아하는 음식 : {food} </h4>
            <h5>음식 설명 :{foodInfo} </h5>
        </div>
    );
};

export default Test9Sub;