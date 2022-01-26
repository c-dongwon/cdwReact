import React, { useState } from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    const [msg,setMsg] = useState('')
    const [show,setShow] = useState(false)

    const showMsg = (text) =>{
        setShow(text)
        setMsg(true)
    }

    const onMsg1 = () =>{
        const result = window.confirm('삭제?')
        if(result){
            showMsg('삭제 ㄱ')
        }else{
            return
        }
    }
    const onMsg2 = () =>{
        const result = window.confirm('복구?')
        if(result){
            showMsg('복구 ㄱ')
        }else{
            return
        }
    }
    return (
        <div>
            <button onClick={onMsg1}>삭제</button>
            <button onClick={onMsg2}>복구</button>
            <Test8Sub show={show} msg={msg} setShow={setShow}/>
        </div>
    );
};

export default Test8;