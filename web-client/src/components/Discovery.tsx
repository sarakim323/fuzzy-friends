import React, { useEffect } from 'react';
import axios from 'axios';

const Discovery = () => {
  const imageArray: string[] = [
    'https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHklMjBkb2d8ZW58MHx8MHx8&w=1000&q=80',
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*',
  ];

  useEffect(() => {
    axios.post('https://api.cloudinary.com/v1_1/demo/image/upload', {}, {})
      .then(url => {});
  }, [])

  return (
    <div>
      {/* Navbar example */}
      <div className="flex flex-row"></div>

      {/* Profile info */}
      <div>
        <div>First Name</div>
        <div>Location</div>
      </div>

      {/* Carousel */}
      <div className="flex flex-row justify-center max-h-80 object-contain items-center">
        {/* Images */}
        {imageArray.map((image, index) => (
          <div className="mx-5" key={index}>
            {/* Main Image */}
            <img
              src={image}
              className="z-20 object-contain rounded-3xl"
              alt=""
            />
          </div>
        ))}
      </div>

      {/* Yes/No buttons */}
      <div></div>
      <div></div>
    </div>
  );
};

export default Discovery;
