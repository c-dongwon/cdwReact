import React from 'react';

const TestPost1 = ({curruntPost,loading}) => {
    if(loading){
        return<h2>loading...</h2>
        //loading 이 true면 텍스트출력
    }
    return (
        <ul>
           {
               curruntPost.map(item =>
                    <li key={item.id} style={{marginBottom:5,listStyle:'none',borderBottom:'1px solid #ddd',padding:5}}>
                        {item.id}/{item.title}
                    </li>
                )
           } 
        </ul>
    );
};

export default TestPost1;