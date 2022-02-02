import React, { useRef, useState } from 'react';

const Test3 = () => {
    const [inputs,setInputs] = useState({
        name:'',
        nickName:''
    })
    const nameRef = useRef()
    const {name,nickName} = inputs// 비구조화 할당을 통해 값 추출
    const chInput = (e) =>{
        const {value,name} = e.target// 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs,// 기존의 input 객체를 복사한 뒤
            [name]:value// name 키를 가진 값을 value 로 설정
        })
    }
    const onReset = () =>{
        setInputs({
            name:'',nickName:''
        })
        nameRef.current.focus()
    }
    return (
        <div>
            <input placeholder="이름" onChange={chInput} name='name' value={name} ref={nameRef}/>
            <input placeholder="닉네임" onChange={chInput} name='nickName' value={nickName}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickName})
            </div>
      </div>
    );
};

export default Test3;