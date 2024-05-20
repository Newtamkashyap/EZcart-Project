
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled } from '@mui/material';
import { bannerData } from '../../constants/data';


const Image = styled('img')({ //in object we always use camelcase in css property.
    width: '100%',



});



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
export const Banner = () => {
    return (
        <Carousel responsive={responsive}
            swipeable={false}//means we cannot swipe any carousel forcefully
            draggable={false}//means we cannot drag any carousel forcefully
            infinite={true}//n times caurosel can swipe
            autoPlay={true}//means carousel will move automatically
            keyBoardControl={true}
            slidesToSlide={1}//means how many slides want to slide in one time ,that will 1 slide one times .
            autoPlaySpeed={3000}//which is equal to 3 seconds
            dotListClass="custom-dot-list-style"//styling in caurosel
            itemClass="carousel-item-padding-40-px"//with padding 
            containerClass="carousel-container">{
                bannerData.map(data => (
                    <Image src={data.url} alt="banners" />

                ))
            }


        </Carousel>
    )
}