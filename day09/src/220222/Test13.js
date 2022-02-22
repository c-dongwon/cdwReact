import React, { useCallback, useMemo, useState } from 'react';

const Test13 = () => {
    const [text,setText] = useState('')//인풋 value값
    const [data,setData] = useState([])//배열
    const onAdd = useCallback(()=>{
        setData([...data,text])//기존배열 복사 + 인풋value 배열에 추가
    },[text,data])//text,data값 랜더링될때마다 업데이트

    const textSize = useMemo(()=>{
        return text.length
    },[text])
    return (
        <div>
            <input type='text' value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={onAdd}>추가</button>
            <hr/>
            <h3>{text}</h3>
            <h3>{text.length}</h3>
            <hr/>
            <h3>useMemo : {textSize}</h3>
            <hr/>
            <ul>
                {
                    data.map((item,index) =><li key={index}>{index}/{item}</li>)
                }
            </ul>
        </div>
    );
};

export default Test13;