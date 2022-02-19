import axios from 'axios';
import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styled/Global';
import { Container } from '../styled/pixastyle'
import GallerySearch from './GallerySearch';
import GalleyList from './GalleyList';

const Gallery = () => {
    const [data,setData] = useState([])//api 배열 받아옴
    const [loading,setLoading] = useState(true)//로딩
    const [error,setError] = useState('')//에러
    const [text,setText] = useState('moon')//인풋 검색값

    useEffect(() =>{
        const API_KEY = '25682462-f9033b34bc04f66de20f2073a'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
        axios.get(url)
        .then(res =>{
            setData(res.data.hits)//hits 까지 불러와야함(배열 객채)
            setLoading(false)//데이터 받아오면 로딩끔
            setError(null)//데이터 받아오면 에러창 안뜸
        })
        .catch(error =>{
            setData([])//에러뜨면 배열 안받음
            setLoading(true)//에러뜨면 무한로딩
            setError('ERROR!!')//에러뜸 문구
        })
    },[text])//검색창에 value 업데이트될때마다 useEffect 업데이트

    const onSearch = (text) =>{
        setText(text)
        //변경된 벨류값 벨류값으로 변경
    }
    return (
        <>
         <GlobalStyle/>
         {/* 글로벌스타일(reset)   */}
         <Container>
            <GallerySearch onSearch={onSearch}/>
            {
                loading && data.length === 0 && (<h1> No IMAGES FOUND </h1>)
                //loading이 ture 거나 data가 하나도없으면(true) 에러문구 출력
            }

            {
                data && !loading && <GalleyList data={data}/>
                //데이터를 받아오고 로딩이 true이면 리스트 출력(로딩 true가 꺼져있는상태)
            }
            {
                error ? error : null
                //error 면 erro문구
            }
         </Container>
        </>
    );
};

export default Gallery;