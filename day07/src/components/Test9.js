import React from 'react';
import styled ,{css} from 'styled-components';

const Comtainer = styled.div`
    width: ${props => props.ww};
    margin: 10px auto;
    border: 1px solid #999;
    padding: 20px;
    background: ${props => props.bg ? props.bg : 'yellow'};
` 
/* ${props => props$.해당 props명} */
const Box = styled.button`
    width: ${props => props.width ? props.width : '120px;'};
    height: 50px;
    margin: 5px;
    border: 0;
    background: ${props => props.bgColor};
    ${props => props.vscss && css`background:red;width:100%;color:#fff;
                                    &:hover{background:blue}
    `}
`
const Test9 = () => {
    return (
        <Comtainer bg='pink' ww='500px'>
            <Box width='150px' bgColor='hotpink'>test</Box>
            <Box>test</Box>
            <Box width='250px' bgColor='tomato'>test</Box>
            <Box width='50px;'>test</Box>
            <Box vscss>test</Box>
        </Comtainer>
    );
};

export default Test9;