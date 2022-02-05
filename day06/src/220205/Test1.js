import React from 'react';
//배열이 업데이트 될 떄 key 가 없을 때 처럼 비효율적으로 업데이트 하는 것이 아니라, 수정되지 않는 기존의 값은 그대로 두고 원하는 곳에 내용을 삽입하거나 삭제


const Test1 = () => {
    const userData = [
        {id:1 , name:'최우식' , addr :'서울'} ,
        {id:2 , name:'김다미' , addr :'제주'} ,
        {id:3 , name:'김지웅' , addr :'경기'} ,
        {id:4 , name:'노정의' , addr :'부산'} ,
        {id:5 , name:'박진주' , addr :'울산'} ,
    ]
    return (
        <div>
            {
                userData.map(user => <p key={user.id}>{user.id}/{user.name}/{user.addr}</p>)
            }
        </div>
    );
};

export default Test1;