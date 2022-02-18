import React from 'react';
import axios from 'axios'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import GlobalStyle from '../styled/Global';
import GallerySearch from './GallerySearch';
import GalleyList from './GalleyList';

const Container = styled.div`
    width: 1400px; margin: 0 auto ;
`

const Gallery = () => {
    const [data , setData] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [error , setError] = useState('')
    const [text , setText] = useState('flowers')

    useEffect( () => {
        const API_KEY = '개인키'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
        axios.get(url)
             .then(res => {
                 setData( res.data.hits )
                 setIsLoading( false )
                 setError('')
             })
             .catch(error => {
                setData([])
                setIsLoading( true )
                setError('에러발생')
             })
    },[text])


    const onSearch = ( text )  => {
        setText( text )
    }

    return (
        <>
           <GlobalStyle /> 
           <Container>
                <GallerySearch  onSearch={onSearch} />
                {
                    isLoading && data.length === 0 && (<h1> No IMAGES FOUND </h1>)
                }

                {
                    data && !isLoading && <GalleyList data={data} />
                }

                <p>
                    {error ? error :null  }
                </p>
           </Container>
        </>
    );
};

export default Gallery;