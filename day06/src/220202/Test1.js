import React from 'react';

const Test1 = ({name,color,isSpecial}) => {
    return (
        <div style={{color}}>
            {
                isSpecial && '#'
            }
            안녕하세요 {name}
        </div>
    );
};
Test1.defaultProps={
    name:'없음'
}
export default Test1;