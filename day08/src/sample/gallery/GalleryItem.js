import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.article`
    margin-bottom: 35px;
    border: 1px solid #ddd;
    padding: 15px;
    img{width:420px;}
    h3{font-size:30px;color:tomato;margin-bottom:20px;padding-left:15px;}
    ul{
        padding: 0 15px;
        margin-bottom: 20px;
        li{
            margin-bottom: 5px;
        }
    }
    p{
        span{
            padding: 3px 20px;
            display: inline-block;
            background-color: #ddd;
            color: tomato;
        }
    }
`

const GalleryItem = ({item}) => {
    const { webformatURL, user, likes , downloads, views , tags} = item
    const tagList = tags.split(',')
    return (
        <ImageBox>
            <img src={webformatURL} alt=''/>
            <h3>{user}</h3>
            <ul>
                <li>조회수 : {views}</li>
                <li>다운로드 : {downloads}</li>
                <li>좋아요 : {likes}</li>
            </ul>
            <p>
                {tagList.map((tag,index) => <span key={index}>#{tag}</span>)}
            </p>
        </ImageBox>
    );
};

export default GalleryItem;