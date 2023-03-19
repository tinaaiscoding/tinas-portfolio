import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import noting1 from '../../../images/projectScreenshots/noting/noting1.png';
import noting2 from '../../../images/projectScreenshots/noting/noting2.png';
import noting3 from '../../../images/projectScreenshots/noting/noting3.png';
import noting4 from '../../../images/projectScreenshots/noting/noting4.png';
import noting5 from '../../../images/projectScreenshots/noting/noting5.png';
import noting6 from '../../../images/projectScreenshots/noting/noting6.png';
import noting7 from '../../../images/projectScreenshots/noting/noting7.png';

const NotingGallery = () => {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={noting1} alt="landing-page" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={noting2} alt="sign-up" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={noting3} alt="notes-dashboard-sort-menu" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={noting4} alt="favourite-notes" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={noting5} alt="new-note" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={noting6} alt="edit-note" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={noting7} alt="calendar" />
      </SwiperSlide>
    </Swiper>
  );
};

export default NotingGallery;
