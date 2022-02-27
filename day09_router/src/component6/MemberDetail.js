import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
 

const MemberDetail = () => {
    const { memberId  } = useParams()
    const [ member , setMember ] = useState({}) 
    const navigate  = useNavigate()

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/users/${memberId}`
        fetch( url )
        .then( res => res.json() )
        .then( res => setMember( res ))
    })
    const style = {
        border:'1px solid tomato',
        margin:10, padding:10, borderRadius:10
    }

    const { name , email , phone , website } = member 

    const onGo  = ()  => {
        navigate('/')
    }

    return (
        <div style={style}>
           <h2> 멤버 세부내용 : no {memberId}  </h2>
           <h3>이름 : {name} </h3>
           <p>이메일 : {email} </p>
           <p>전화번호 : {phone} </p>
           <p>웹사이트 : {website} </p>
           <button onClick={onGo}>이전</button>
        </div>
    );
};

export default MemberDetail;