import React from 'react';

const Test15Count = ({count,text}) => {
    console.log(count,text)
    return (
        <div>
            {text}/{count}
        </div>
    );
};

export default Test15Count;