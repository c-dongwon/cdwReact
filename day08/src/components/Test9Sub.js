import React, { useMemo } from 'react';

const getColor = ( color) => {
    console.log( 'getColor' )
    switch( color ) {
        case 'pink' : return '분홍색 입니다.'; 
        case 'tomato' : return '토마토색 입니다.'; 
        case 'orange' : return '오렌지색 입니다.'; 
        case 'skyblue' : return '하늘색 입니다.'; 
        default : return '해당내용없음'; 
    }
}
const getFood = ( food ) => {
    console.log( 'getFood' )
    switch( food ) {
        case '갈비' : return '갈비에대한 설명 입니다.'; 
        case '불고기' : return '불고기에대한 설명 입니다.'; 
        case '비빔밥' : return '비빔밥에대한 설명 입니다.';         
    }
}

const Test9Sub = ({ color , food }) => {
    // const colorInfo = getColor( color )
    // const foodInfo = getFood( food )

    const colorInfo = useMemo( () => getColor( color )  , [ color ] )
    // const colorInfo = useMemo( () => {
    //   return  getColor( color ) 
    // } , [ color ] )
    const foodInfo = useMemo( () =>  getFood( food )   , [food] )

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