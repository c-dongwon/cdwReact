import React from 'react';

const TestPost1 = ({curruntPost,loading}) => {
    if(loading){
        return <h2>로딩중</h2>
    }
    
    return (
        <ul>
           {
               curruntPost.map(item => 
               <li key={item.id} style={{marginBottom:5,listStyle:'none',borderBottom:'1px solid #ddd',padding:5}}>
                   {item.id}/{item.title}
                </li>)
           } 
        </ul>
    );
};

export default TestPost1;