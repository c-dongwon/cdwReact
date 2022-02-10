import React from 'react';
import styled,{css} from 'styled-components';

const Container = styled.div`
    width: ${props => props.ww};
    margin: 10px;
    border: 1px solid #333;
    padding: 20px;
    background: ${props => props.bg ? props.bg : 'yellow'};
`
const Box = styled.button`
    width: ${props => props.width ? props.width : '120px'};
    height: 50px;
    background: ${props => props.bg};
    ${props => props.bcss && css`background:red;&:hover{background:blue}`}
`

const Test9 = () => {
    return (
        <Container ww='500px' bg='pink'>
            <Box width="30px">test</Box>
            <Box bg="red">test</Box>
            <Box width="200px" bg="#000">test</Box>
            <Box>test</Box>
            <Box bcss>test</Box>
        </Container>
    );
};

export default Test9;