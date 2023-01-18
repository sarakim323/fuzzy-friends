import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const CarouselCard = () => {
  const images: { image: string; caption: string }[] = [
    {
      image:
        'https://mymodernmet.com/wp/wp-content/uploads/2020/10/cooper-baby-corgi-dogs-8.jpg',
      caption: '1',
    },
    {
      image:
        'https://www.purina.com.au/-/media/project/purina/main/breeds/puppies/puppy-chihuahua/puppy-corgi.jpg',
      caption: '2',
    },
    {
      image:
        'https://www.rover.com/blog/wp-content/uploads/2019/01/6342530545_45ec8696c8_b.jpg',
      caption: '3',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Archie_the_Pembroke_Welsh_Corgi.jpg/222px-Archie_the_Pembroke_Welsh_Corgi.jpg',
      caption: '4',
    },
    {
      image:
        'https://media-be.chewy.com/wp-content/uploads/shutterstock_1180793386.jpg',
      caption: '5',
    },
  ];

  return (
    <div className="flex flex-col h-[90vh] justify-center items-center m-auto w-[100%]">
      <Carousel
        show={1}
        slide={1}
        swiping={true}
        className="flex flex-row justify-evenly items-center max-w-[50%]"
        transition={0.5}
      >
        {images.map((image, index) => (
          <div className="flex-row justify-center items-center" key={index}>
            <img
              src={image.image}
              className="max-h-[50vh] max-w-[500px] object-center rounded-3xl"
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
