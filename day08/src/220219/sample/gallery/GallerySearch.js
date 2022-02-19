import React, { useState } from 'react';
import {ImageForm} from '../styled/pixastyle'
const GallerySearch = ({onSearch}) => {
    const [s_text,s_setText] = useState('')//인풋 벨류값

    const onSubmit = (e) =>{
        e.preventDefault()
        if(!s_text) return//인풋 입력안하면 return
        onSearch(s_text)
        //갤러리.js만든 함수 내려서 연동 여기서 값바뀌면 갤러리.js text값도 바뀜
    }
    return (
        <ImageForm onSubmit={onSubmit}>
            <input type='text' value={s_text} onChange={e=>s_setText(e.target.value)}/>
            <button type='submit'>검색</button>
        </ImageForm>
    );
};

export default GallerySearch;