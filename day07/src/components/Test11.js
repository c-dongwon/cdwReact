import React from 'react';
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
//이모션
const Test11 = () => {
    //scss 형태그대로 작성 가능

    const test = css`
        border:1px solid #333;
        border-radius:25px;
        padding: 15px;
        margin: 15px;
        display:flex;
    `
    //객체형
    const title = css({
        textAlign:'center',fontSize:30,color:'tomato'
    })
    const tit = css`
        color: #666;
        
            span{
                color: red;
            }
        
    `
       const btnStyle = css`
      
   `
    return (
        <>
            <h2 css={title}>스타일 정리</h2>
            <div css={test}>
                <p css={tit}><span>emotion</span>입니다.</p>
                <button css={btnStyle}>확인</button>
            </div>
        </>
    );
};

export default Test11;