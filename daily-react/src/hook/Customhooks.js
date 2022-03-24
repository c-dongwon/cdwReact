import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFetch from './useFetch';

const Customhooks = () => {
   const test = useFetch("https://jsonplaceholder.typicode.com/posts")
    return (
        <div>
            {
                test.map(item => <p key={item.id}>{item.id}/{item.title}</p>)
            }
        </div>
    );
};

export default Customhooks;