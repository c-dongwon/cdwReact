//rscm => memo붙음
import React, { memo } from 'react';
//변하지않는 값은 안불러옴
const Test14Sub = memo(({title,cnt}) => {
    console.log({title},{cnt})
     return (
         <div>
             <h1>{title}{cnt}</h1>
         </div>
    );
});

export default Test14Sub;