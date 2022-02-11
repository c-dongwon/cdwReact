import React from 'react';
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'

const Test11 = () => {
    const test = css`
        border: 1px solid #333;
        padding: 15px;
    `
    const tit = css({
        textAlign:'centetr',fontSize:30
    })
    const title = css`
        color:#666;
        span{
            color: red;
        }
    `
    return (
        <>
            <h2 css={tit}>스타일 정리</h2>
            <div css={test}>
                <p css={title}><span>emotion</span>입니다</p>
                <button>확인</button>
            </div>
        </>
    );
};

export default Test11;