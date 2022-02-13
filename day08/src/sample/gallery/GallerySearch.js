import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const ImageForm = styled.form`
    text-align: center;
    padding: 40px 0;
    input{
        width: 450px;
        height: 50px;
        padding: 15px;
        border: 1px solid #ddd;
        box-sizing: border-box;
    }
    button{
        width: 80px;
        height:50px;
        vertical-align: top;
        border: 0;
        margin-left: 5px;
        background-color: #555;
        color: #fff;
    }
`

const GallerySearch = ({onSearch}) => {

    const [text,setText] = useState('')
    const ref1 = useRef()
    
    const onSubmit  = (e) =>{
        e.preventDefault()
        ref1.current.focus()
        if(!text) return
        onSearch(text)
    }
    return (
        <ImageForm onSubmit={onSubmit}>
            <input type='text' value={text} onChange={e => setText(e.target.value)} ref={ref1}/> 
            <button type='submit'>검색</button>       
        </ImageForm>
    );
};

export default GallerySearch;