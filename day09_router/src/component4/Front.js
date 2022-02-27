import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data'

const Front = () => {
    // <Route path="front/:name" element={<Front  data={data} />} />
    // const { 사용자정의변수 } = useParams() 
    const { name } = useParams() 
    return (
        <div>
            <h1>Front page</h1> 
            {
                data.filter( item => item.title === name ) 
                    .map( (item, index) => <div key={index}>
                        <h2>{item.title}</h2>
                        <h3>{item.info}</h3>
                    </div>)
            }

        </div>
    );
};

export default Front;