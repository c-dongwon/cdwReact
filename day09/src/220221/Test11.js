import React, { useEffect, useState } from 'react';
const user = [
    {id:1,name:'aa'},
    {id:2,name:'aAa'},
    {id:3,name:'b'},
    {id:4,name:'cc'},
    {id:5,name:'DD'},
    {id:6,name:'e'},
    {id:7,name:'FF'},
    {id:8,name:'g'},
    {id:9,name:'ha'},
    {id:10,name:'ew'}
]
const Test11 = () => {
    const [data,setData] = useState(user)//배열 data
    const [text,setText] = useState('')
    const [search,setSearch] = useState('')
    const test1 = () =>{
        setSearch(text)
    }
    useEffect(()=>{
        setData(user.filter(itme => itme.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())))
    },[text])
    return (
        <div>
            <input type='text' value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={test1}>검색</button>
            <ul>
                {
                    data.map(item=><li key={item.id}>{item.id}/{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test11;