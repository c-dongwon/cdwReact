import React, { useMemo, useState } from 'react';

const Test7 = () => {
    const [cnt1,setCnt1] = useState(1)
    const [cnt2,setCnt2] = useState(10)

    //사용자정의 함수
    const isEven = useMemo(() =>{
        console.log(cnt1)
        return cnt1 % cnt2 === 0
    },[cnt1])


    return (
        <div>
            <h2>카운트 : {cnt1}</h2>
            <button onClick={() => setCnt1(cnt1 + 1)}>증가</button>

            <h2>카운트 : {cnt2}</h2>
            <button onClick={() => setCnt2(cnt2 + 1)}>증가</button>
            <hr/>
            <h2>
                {/* 함수() 바로호출 */}
                홀수,짝수 출력 : {isEven ? '짝수':'홀수'}
            </h2>
        </div>
    );
};

export default Test7;


/*
    성능 최적화
    useMemo / useCallback : 메모이제이션된 값을 반환

    useMemo : return값을 기억 - 사용하기 쉽지않다 (많이써본사람들이 유용하게 사용가능) 사용자 정의함수
    useCallback : 함수를기억 (함수자체를 기억)

    useMemo : 잘쓰기 쉽지않다 (경험) => + context 사용한다

    -return  값 기억(함수)
    useMemo(()=>{},deps)
    useMemo(콜백함수,의존성)
    useMemo(콜백함수,[])
    useMemo(콜백함수,[바뀌는값])

    -함수를 기억
    useCallback(()=>{},deps)
    useCallback(콜백함수,의존성)
    useCallback(콜백함수,[])
    useCallback(콜백함수,[바뀌는값])
*/