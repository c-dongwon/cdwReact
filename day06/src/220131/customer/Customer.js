import React, { useRef, useState } from 'react';
import AddUser from './AddUser';
import EditUser from './EditUser';
import ListUser from './ListUser';
import './style.css'

const Customer = () => {
    const userData = [
        {id:1 , name:'최우식' , addr :'서울'} ,
        {id:2 , name:'김다미' , addr :'제주'} ,
        {id:3 , name:'김지웅' , addr :'경기'} ,
        {id:4 , name:'노정의' , addr :'부산'} ,
        {id:5 , name:'박진주' , addr :'울산'} ,
    ]
    const no = useRef( userData.length + 1 )
    const [ users , setUsers ] = useState( userData )
    const [ isEdit , setIsEdit ] = useState( false )
    const [ current , setCurrent ] = useState({})

    //삭제
    const onDel  = (id)  => {
        setUsers( users.filter( user  => user.id !== id ))
    }

    //추가
    const onAdd = ( form )  => {
        form.id = no.current++
        setUsers([...users , form ])
    }

    //수정상태
    const onEdit  = (user)  => {
        setIsEdit( true )
        setCurrent( user )
    }
    //갱신
    const onUpdate = ( data ) => {
        setUsers( users.map( user  => user.id === data.id ? data : user ))
        setIsEdit( false )
    }

    return (
        <div className="Customer">
            {
                isEdit ?  <EditUser current={current} onUpdate={onUpdate} setIsEdit={setIsEdit} /> 
                            :  
                          <AddUser  onAdd={onAdd} />
            }                   
            <ListUser users={users}  onDel={onDel}  onEdit={onEdit} />
        </div>
    );
};

export default Customer;