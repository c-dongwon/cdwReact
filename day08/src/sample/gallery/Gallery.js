import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styled/Global';
import GallerySearch from './GallerySearch';
import GalleyList from './GalleyList';


const Container = styled.div`
    width: 1400px;
    margin: 0 auto;
`

const Gallery = () => {
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [text,setText] = useState('flowers')
    useEffect(()=>{
        const API_KEY = '25682462-f9033b34bc04f66de20f2073a'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
        axios.get(url)
        .then(res => {
            setData(res.data.hits)
            setError('')
            setLoading(false)
        })
        .catch(error => {
            setData([])
            setLoading(true)
            setError('에러')
        })
    },[text])
    const onSearch = (text) =>{
        setText(text)
    }
    return (
<>
           <GlobalStyle /> 
           <Container>
                <GallerySearch onSearch={onSearch}/>
                {
                    loading && data.length === 0 && (<h1> No IMAGES FOUND </h1>)
                }

                {
                    data && !loading && <GalleyList data={data} text={text}/>
                }

                <p>
                    {error ? error :null  }
                </p>
           </Container>
        </>
     
    );
};

export default Gallery;