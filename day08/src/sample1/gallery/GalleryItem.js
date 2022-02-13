import React from 'react';
import {ImageBox} from '../styled/pixastyle'



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