import React, { useState } from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    const [ msg , setMsg ] = useState('')
    const [ isShow , setIsShow ] = useState( false )
/*
    const onMsg1 = ()  => {
        const result = window.confirm('전부 삭제하시겠습니까?')
        if( result ) {
            setMsg('예 전부 삭제해주세요')
            setIsShow( true )
        }else{
            return 
        }
    }
    const onMsg2 = ()  => {
        const result = window.confirm('전부 복구하시겠습니까?')
        if( result ) {
            setMsg('예 전부 복구해주세요')
            setIsShow( true )
        }else{
            return 
        }
    }
*/
    const showMsg = ( text  ) => {
        setMsg( text )
        setIsShow( true )
    }
    
    const onMsg1 = ()  => {
        const result = window.confirm('전부 삭제하시겠습니까?')
        if( result ) {
            showMsg('전부 삭제해주세요')
        }else{
            return 
        }
    }
    const onMsg2 = ()  => {
        const result = window.confirm('전부 복구하시겠습니까?')
        if( result ) {
            showMsg('전부 복구해주세요')
        }else{
            return 
        }
    }

    return (
        <div>
            <p>
                <button onClick={ onMsg1 }>출력1</button>
                <button onClick={ onMsg2 }>출력2</button>
            </p>
            <Test8Sub isShow={isShow} msg={msg}  setIsShow={setIsShow} />
        </div>
    );
};

export default Test8;