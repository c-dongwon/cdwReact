import React from 'react';
import styled from 'styled-components'

const Test8 = () => {
    return (
        <Contaniner>
            <Title>tit</Title>
            <Btn>확인</Btn>
        </Contaniner>
    );
};

export default Test8;

const Contaniner = styled.div`
    width: 400px;
    border: 1px solid #ddd;
    border-radius:20px;
`
const Title = styled.h1`
    color: red;
`
const Btn = styled('button')`
    background: #000;
`