import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Member = ({item}) => {
    const {id,name,email} = item
    const navigate = useNavigate()
    
    const style = {
        border:'1px solid tomato',
        margin:10,padding:10,borderRadius:10
    }
    
    return (
        <div style={style}>
        <p> ID: {id} </p>
        <h4> 이름 : {name} </h4>
        <h5> 이메일 : { email } </h5>
        <p><Link to={`/member/${id}`}> 자세히보기 </Link>  </p>
        <button>상세페이지</button>
    </div>
    );
};

export default Member;