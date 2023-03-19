import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import voyage1 from '../../../images/projectScreenshots/voyage/voyage1.png';
import voyage2 from '../../../images/projectScreenshots/voyage/voyage2.png';
import voyage3 from '../../../images/projectScreenshots/voyage/voyage3.png';
import voyage4 from '../../../images/projectScreenshots/voyage/voyage4.png';
import voyage5 from '../../../images/projectScreenshots/voyage/voyage5.png';
import voyage6 from '../../../images/projectScreenshots/voyage/voyage6.png';
import voyage7 from '../../../images/projectScreenshots/voyage/voyage7.png';

const VoyageGallery = () => {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={voyage1} alt="landing-page" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={voyage2} alt="sign-up" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={voyage3} alt="add-destionation" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={voyage4} alt="new-destionation-added" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={voyage5} alt="itinerary" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={voyage6} alt="itinerary-display-avg-weather" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={voyage7} alt="world-map" />
      </SwiperSlide>
    </Swiper>
  );
};

export default VoyageGallery;
