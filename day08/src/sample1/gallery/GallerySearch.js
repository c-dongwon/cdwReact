import React, { useRef, useState } from 'react';
import {ImageForm} from '../styled/pixastyle'

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