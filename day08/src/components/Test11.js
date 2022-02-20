import React, { useEffect, useState } from 'react';

const user = [
    {id:1,name:'aa'},
    {id:2,name:'BB'},
    {id:3,name:'Cc'},
    {id:4,name:'DD'},
    {id:5,name:'ee'},
    {id:6,name:'fF'},
    {id:7,name:'GG'},
    {id:8,name:'H1'},
    {id:9,name:'III'},
    {id:10,name:'JjJ12'},
]

const Test11 = () => {
    const [data,setData] = useState(user)
    const [text,setText] = useState('')
    const [search,setSearch] = useState('')
    const test1 = () =>{
        setSearch(text)
    }
    useEffect(() => {
        setData(user.filter(item =>item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())))
    },[text])
    return (
        <div>
            <input type='text' value={text} onChange={e => setText(e.target.value)}/>    
            <button onClick={test1}>검색</button>
            <hr/>
            <ul>
                {
                    data.map(item => <li key={item.id}>{item.id}/{item.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Test11;