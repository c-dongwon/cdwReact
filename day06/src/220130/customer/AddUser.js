import React, { useRef, useState } from 'react';

const AddUser = ({onAdd}) => {
    const [user,setUser] = useState({
        name:'',addr:''
    })
    const {name,addr} = user

    const chInput  = (e) =>{
        const {value,name} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const nameRef = useRef()
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!name || ! addr) return
        onAdd(user)
        setUser({name:'',addr:''})
        nameRef.current.focus()
    }
    return (
        <form onSubmit={onSubmit}>
            <h2>그해 우리는 출연진 추가</h2>
            <p>
                 <label>이름: </label>
                 <input type="text"  value={name} name="name" onChange={ chInput } ref={nameRef} />
             </p>   
             <p>
                 <label>주소: </label>
                 <input type="text" value={addr} name="addr"  onChange={ chInput }/>
             </p>   
             <p>
                 <button type="submit">추가</button>
             </p>
        </form>
    );
};

export default AddUser;