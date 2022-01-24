import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

const Test1 = () => {
    const [ cnt  , setCnt ] = useState(0)
    const ref1 = useRef(null)
    const ref2 = useRef()

    const onColor  = ()  => {
        setCnt( cnt + 1 )
        ref1.current.style.color = 'skyblue'
        ref2.current.style.color = 'hotpink'
    }
    //화면에 그련진후에  
    useEffect( () => {
        console.log('useEffect')
        ref1.current.style.color = 'green'  
    })

    //화면에 그려지기 전에 
    useLayoutEffect( ()  => {
        console.log('useLayoutEffect')
        ref2.current.style.color = 'red'  
    })

    //useEffect가 문제가 발생될경우에는 useLayoutEffect 사용한다 
    
    return (
        <div>
            <h2>{ cnt } </h2>   
            <h2 ref={ref1}> useEffect  </h2>   
            <h2 ref={ref2}> useLayoutEffect </h2>   
            <button onClick={ onColor }>컬러+숫자</button>
        </div>
    );
};

export default Test1;

/*
Hooks
Effect Hook을 사용하면 함수 컴포넌트에서 side effect (부수효과) 를 수행 
부수효과 (side effect) : 함수가 결과값을 반환하는것 외에 다른 일을 할때 그 함수는 부수효과를 가진다 
부수효과  : 비동기통신 요청/응답 , DOM조작 , 구독/취소 등 

class 형 : 
라이프사이클 : 
componentDidMount : 처음 실행후 
componentDidUpdate : 값이 변경된 후 
componentWillUnmount : 닫기, 로딩이 끝난후 

함수형 위 3개를 합쳐놓은것이 useEffect 이다 

 - useEffect : 화면에 렌더링이 완료된 후 
 - 컴포넌트가 렌더링 될때마다 업데이트 작업을 수행 
 
 ** 화면에 그려진 후 실행 
형식)
useEffect 형식
useEffect( 콜백함수)  :  mount / update
useEffect( 콜백함수, []) : mount 한번만
useEffect( 콜백함수, [의존형]) : mount / 의존형(state,props**)에의한 update 


1. mount / update ( 많이 사용하지 않는다 )
useEffect( () => {
    mount / update
    실행문
})

2. mount ( 한번만 실행 )
useEffect( ()  => {
     mount 
}, [] )

3.  mount / update ( 많이 사용한다 )
의존값 : 업데이트 되는값 , 특정 state , 특정 props *** 
useEffect( () => {
     mount / update
}, [의존값] )


메모리 누수가 발생하지 않도록 정리(clean-up)하는 것은 매우 중요
4. 정리(Clean-up) 사용할경우 
useEffect( ()  => {
    실행문 : mount / update

    //뒷정리
    return() => {
       정리(Clean-up)
    }
},[의존값])

메모리 누수를 방지하기 위해 UI컴포넌트를 제거하기 전에 수행 
컴포넌트가 여러번 렌더링 된다면 다음 effect가 수행되지 전에 이전 effect를 정리되어야 한다 
이펙트 함수를 통해 설정된 사이드 이펙트( 예: 구독 )는 컴포넌트가 UI에서 제거 될때 정리되어야 함 이를 수행하려면 이펙트 함수에서 클린업 함수를 반환하고 그 함수 내부에서 정리를 실행해야함 

사용범위
- props로 받은값을 처리할때 
- 외부 API (axios , fetch )
- setTimeout , setInterval ( 타이머 )
- 외부 라이브러리 


*/