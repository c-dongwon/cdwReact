import React from 'react';
import styled from 'styled-components'
//vscode-styled-components 확장 프로그램
const Container = styled.div`
    width:300px;border:1px solid #333;margin:20px;padding:20px;
`
const Box1 = styled.section`
    padding:20px;background:pink;margin-bottom:15px;transtion:0.4s;cursor:pointer;
    &:hover{
        background:skyblue;padding:25px;
    }
`
const Box2 = styled('article')`
    padding:15px;
    background:tomato;
    margin-bottom:10px;
    box-sizing:border-box
    width:100%;
    &:hover{
        width:150%;background:red;
    }
`
const Box3 = styled('div')``
const Box4= styled.button`
    width: 100%;
    height:40px;
    background: #000;
    color:#fff;
`

const Test7 = () => {
    return (
        <Container>
            <Box1>안녕</Box1>
            <Box2>안녕</Box2>
            <Box3>안녕</Box3>
            <Box4>안녕</Box4>
        </Container>
    );
};

export default Test7;

/*
    const 컴포넌트 = styled.태그 ``
    const Container = styled.div`` => Container 컴포넌트 div변경

    const 컴포넌트 = styled(태그) ``
    const Container = styled(div)`` => Container 컴포넌트 div변경

    css 메인 컴포넌트에 위쪽에 작성기본 => 1.css처리 2.컴포넌트 보여주기
    css 메인 컴포넌트에 아래쪽에 작성 => 1.컴포넌트를 보여주고 2.css처리

    유지보수하기 편하다
    props 처리가 가능하다
*/