import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [data,setData] = useState([])//배열저장
    const [text,setText] = useState('')//인풋 value

    useEffect(()=>{
        const url = `https://hn.algolia.com/api/v1/search?query=${text}`
        axios.get(url)
        .then(res => setData(res.data.hits))
    },[text])//value 값 입력시 업데이트
    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.objectID}>{item.title}</li>)
                }
            </ul>
        </div>
    );
};

export default Test5;