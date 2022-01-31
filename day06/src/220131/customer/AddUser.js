import React, { useRef, useState } from 'react';

const AddUser = ({onAdd}) => {
    const [user,setUser] = useState({
        name:'',addr:''
    })
    const nameRef = useRef()
    const {name,addr} = user//비구조화할당으로 name,addr user안에 저장

    const chInput = (e) =>{
        const {value,name} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault()
        if(!name ||!addr) return
        onAdd(user)//onAdd함수안에 user안에 저장해놓은 name,addr value 넣음
        setUser({name:'',addr:''})
        nameRef.current.focus()
    }
    return (
        <form onSubmit={onSubmit}>
              <h2>그해 우리는 출연진 추가</h2>
              <p>
                 <label>이름: </label>
                 <input type="text" name='name' value={name} onChange={chInput} ref={nameRef}/>
             </p>   
             <p>
                 <label>주소: </label>
                 <input type="text" name='addr' value={addr} onChange={chInput}/>          
            </p>   
             <p>
                 <button type="submit">추가</button>
             </p>
        </form>
    );
};

export default AddUser;