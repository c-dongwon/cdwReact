import React, { useRef, useState } from 'react';
import ListUser from './ListUser';
import AddUser from './AddUser';
import EditUser from './EditUser';
import './style.css'
const Customer = () => {
    const userData = [
        {id:1,name:'최우식',addr:'서울'} ,
        {id:2 , name:'김다미' , addr :'제주'} ,
        {id:3 , name:'김지웅' , addr :'경기'} ,
        {id:4 , name:'노정의' , addr :'부산'} ,
        {id:5 , name:'박진주' , addr :'울산'} ,
    ]
    const no = useRef(userData.length  + 1)
    const [users,setUsers] = useState(userData)
    const [edit,setEdit] = useState(false)
    const [current,setCurrent] = useState({})


    const onAdd = ( form )  => {
        form.id = no.current++
        setUsers([...users , form ])
    }
    const onDel = (id) =>{
        setUsers(users.filter(user => user.id !== id))
    }
    const onEdit = (user) =>{
        setEdit(true)
        setCurrent(user)
    }
    const onUpdate = (data) =>{
        setUsers(users.map(user => user.id === data.id ? data:user))
        setEdit(false)
    }
    return (
        <div className='Customer'>
            {
                edit ?   <EditUser current={current} setEdit={setEdit} onUpdate={onUpdate}/> : <AddUser onAdd={onAdd}/>  
            }
           
            <ListUser users={users} onDel={onDel} onEdit={onEdit}/>
        </div>
    );
};

export default Customer;