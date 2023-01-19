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
    <div className="float-right max-w-[750px] p-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 h-110 grid grid-cols-1 gap-2 content-center">
      <Carousel
        show={1}
        slide={1}
        swiping={true}
        className="justify-evenly items-center"
        transition={0.5}
      >
        {images.map((image, index) => (
          <div className="flex-row justify-center items-center" key={index}>
            <img
              src={image.image}
              className="h-[50vh] max-w-[500px] object-cover object-center"
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCard;
