import React from 'react';
import Masonry from 'react-masonry-css'
import GalleryItem from './GalleryItem';
import { ImageContainer } from '../styled/pixastyle'


const GalleyList = ({data}) => {
    return (
        <ImageContainer>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {/* array of JSX items */}
                {
                    data.map( item => <GalleryItem key={item.id} item={item} />)
                }
            </Masonry>
        </ImageContainer>
    );
};

export default GalleyList;