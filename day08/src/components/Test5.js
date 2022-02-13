import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Test5 = () => {
    const [data,setData] = useState([])
    const [text,setText] = useState('')

    useEffect(()=>{
        const url =`https://hn.algolia.com/api/v1/search?query=${text}`
        axios.get(url)
            .then(res => setData(res.data.hits))
    },[text])//vaule 입력할때마다 업데이트

    return (
        <div>
            <input type='text' value={text} onChange={(e) =>setText(e.target.value)}/>
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