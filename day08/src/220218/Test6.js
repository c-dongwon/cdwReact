import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
const Container = styled.div`
    width: 1400px;
    margin: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Article = styled.article`
   width: 300px;
    margin: 5px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    a{
        color: #999;
        text-decoration: none;
    }
    h2{
        font-size: 20px;
        color: #333;
        margin-bottom: 20px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    img{
        max-width: 300px;
        height: 200px;
    }
    p{
        font-size:15px;
        line-height: 1.7;
        color: #333;
        word-break: keep-all;
    }
`
const Test6 = () => {
    const [data,setData] = useState([])

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?country=kr&apiKey=9136990ad9ab44219e19d210289d6d6c'
        axios.get(url)
        .then( res=>setData(res.data.articles))
    },[])
    return (
        <Container>
            {
                data.map((item,index) => <Article key={index}>
                    <a href={item.url} target='_blank'>
                        <h2>{item.title}</h2>
                        <img src={item.urlToImage} alt={item.title}/>
                        <p>{item.description}</p>
                    </a>
                </Article>)
            }
        </Container>
    );
};

export default Test6;