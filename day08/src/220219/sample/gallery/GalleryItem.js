import React from 'react';
import { ImageBox } from '../styled/pixastyle'

const GalleryItem = ({item}) => {
    const {webformatURL,views,downloads,likes,user,tags} =item//비구조활당
    const taglist = tags.split(',')//배열 끊어줌
    return (
        <ImageBox>
                <img src={webformatURL} alt="" />
            <h3> {user} </h3>
            <ul>
                <li>조회수 : {views} </li>
                <li>다운로드 :{downloads} </li>
                <li>좋아요: {likes} </li>
            </ul>
            <p>
                {taglist.map((tag,index)=><span key={index}>#{tag.trim()}</span>)}
            </p>
        </ImageBox>
    );
};

export default GalleryItem;