import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.article`
    margin-bottom:35px; border:1px solid #999;padding:15px 15px 35px; box-shadow: 3px 3px 5px #dcdcdc;
    img {   width:420px;  }
    h3 { font-size:30px; color:tomato; margin-bottom:20px; padding-left:15px;}
    ul {  padding:0 15px; margin-bottom:20px; 
        li {
            margin-bottom:5px;
        }
    }
    p {
        span {
            border-radius: 15px; padding:3px 20px; display:inline-block; background:#efefef; color:tomato
        }
    }
`
const GalleryItem = ({item}) => {
    const { webformatURL, user, likes , downloads, views , tags} = item 
    const taglist = tags.split(',')

    return (
        <ImageBox>
            <img src={webformatURL} alt="" />
            <h3> {user} </h3>
            <ul>
                <li>조회수 : {views} </li>
                <li>다운로드 :{downloads} </li>
                <li>좋아요: {likes} </li>
            </ul>
            <p>  { taglist.map( (tag,index)=> <span key={index}>#{tag.trim()}</span>)}
            </p>
        </ImageBox>
    );
};

export default GalleryItem;