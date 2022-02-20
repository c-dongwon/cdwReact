import React from 'react';

const Test15Title = () => {
    console.log('title')
    return (
        <div>
            React.memo입니다
        </div>
    );
};

export default React.memo(Test15Title);