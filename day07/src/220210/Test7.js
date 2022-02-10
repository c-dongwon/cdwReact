import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
width:300px;border:1px solid #ddd;margin: 20px;padding: 20px;
`
const Box1 = styled.section`
    padding: 20px;background:pink;margin-bottom:15px;transtion:0.4;
    &:hover{
        background: red;
    }
`
const Box2 = styled('article')`
    padding: 15px;
    width: 400px;
    background: blue;
    &:hover{
        width: 200px;
    }
`
const Box3 = styled.section``
const Box4 = styled.section``
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