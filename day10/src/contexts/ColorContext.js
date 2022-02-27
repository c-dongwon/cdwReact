import React, { createContext, useMemo, useState } from 'react';
//관리자 만들기 

/*
export const 전역관리자명 = createContext(defaultValue)
전역관리자명 : React Context는 전역데이터를 담고 있는 하나의 저장공간 

Provider 는 value을 props를 받아서 하위 컴포넌트( 자식, 자손) 에 전달할수 있다 
*/

export const ColorContext = createContext() 

const ColorProvider = ( props ) => {
    //모든 상태, 함수처리 
    const [ color , setColor ] = useState('hotpink')

    const onRed  = () =>  { setColor('red')}
    const onGreen  = () =>  { setColor('green')}
    const onBlue = () =>  { setColor('blue')}
    const onPink  = () =>  { setColor('pink')}
    const onTomato  = () =>  { setColor('tomato')}


    const value = useMemo( () => ({ color, onRed, onGreen, onBlue, onPink, onTomato }),[color, onRed, onGreen, onBlue, onPink, onTomato])

    return (
        <ColorContext.Provider value={value} >
            {/* UI 디자인 - Color 컴포넌트 */}
            {  props.children }
            {/* <Color/> */}
        </ColorContext.Provider>
    );
};

export default ColorProvider;