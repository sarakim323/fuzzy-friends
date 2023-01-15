import React, { useEffect } from 'react';
import axios from 'axios';
import { Carousel } from '@trendyol-js/react-carousel';

const Discovery = () => {
  const buttonClassNames =
    'fa-solid rounded-full bg-slate-200 p-3 text-md hover:cursor-pointer';
  const barkSniffClasses =
    'rounded-full bg-slate-200 text-md hover:cursor-pointer w-[3rem] text-center';
  const imageArray: string[] = [
    'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
    'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg',
    'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
    'https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg',
  ];

  // useEffect(() => {
  //   axios.post('https://api.cloudinary.com/v1_1/demo/image/upload', {}, {})
  //     .then(url => {});
  // }, [])

  return (
    <div className="">
      {/* Navbar example */}
      <div className="flex flex-row"></div>

      {/* Profile info */}
      <div className="flex flex-row justify-evenly text-5xl">
        <div>First Name</div>
        <div>Location</div>
      </div>

      {/* Carousel */}
      {/* <div className="flex items-center gap-2 overflow-x-auto">

      </div> */}

      <div className="flex flex-col h-[90vh] justify-center items-center m-auto w-[100%]">
        <Carousel
          leftArrow={<i className={buttonClassNames + ' fa-arrow-left'}></i>}
          rightArrow={<i className={buttonClassNames + ' fa-arrow-right'}></i>}
          show={2}
          slide={1}
          swiping={true}
          className="flex flex-row justify-evenly items-center max-w-[80%]"
          transition={0.5}
        >
          {/* Images */}
          {imageArray.map((image, index) => (
            <div className="flex-row justify-center items-center" key={index}>
              {/* Main Image */}
              <img
                src={image}
                className="max-h-[50vh] max-w-[500px] object-center rounded-3xl"
                alt=""
              />
            </div>
          ))}
        </Carousel>
        {/* Yes/No buttons */}
        <div className="flex flex-row justify-between w-[80%]">
          <div className={barkSniffClasses}>Bark</div>
          <div className={barkSniffClasses}>Sniff</div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
