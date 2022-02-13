import axios from 'axios';
import React, { useEffect, useState } from 'react';

//남들이쓰는 에러표시법
const Test4 = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(()=>{
       const getData = async() =>{
           try{
               const re = await axios.get('https://jsonplaceholder.typicode.com/posts')
               setData(re.data)
               setError(null)
               setLoading(true)
           }catch(e){
                setError('에러')
           }
           setLoading(false)
       }
       getData()
    },[])

    if(loading) return <div>로딩중...</div>
    if(error) return <div>에러발생..</div>
    if(!data) return null
    return (    
        <div>
            {
                data.map(item => <p key={item.id}>{item.id}.{item.title}</p>)
            }
        </div>
    );
};

export default Test4;