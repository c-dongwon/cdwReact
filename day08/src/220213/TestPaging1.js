import React from 'react';

const TestPaging1 = ({postsPage,post,onShow}) => {
    const pageNum = []
    for(let i =1; i<Math.ceil(post.length/postsPage); i++){
        // Math.ceil 반올림 리턴 함수
        pageNum.push(i)
        //페이징 9개 배열 리턴
        console.log(pageNum)
    }
    return (
        <ul style={{listStyle:'none',display:'flex'}}>
            {
                pageNum.map(item =>
                    <li key={item} onClick={()=>onShow(item)}
                    style={{width:30,height:30,border:'1px solid #333',margin:5,lineHeight:'30px',textAlign:'center',cursor:'pointer'}}>
                        {item}

                    </li>
                    )
            }
        </ul>
    );
};

export default TestPaging1;