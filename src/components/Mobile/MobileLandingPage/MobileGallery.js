import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './MobileGallery.module.css'

import ttt1 from '../../../images/projectScreenshots/tic-tac-toe/ttt1.png';
import ttt2 from '../../../images/projectScreenshots/tic-tac-toe/ttt2.png';
import noting1 from '../../../images/projectScreenshots/noting/noting1.png';
import noting3 from '../../../images/projectScreenshots/noting/noting3.png';
import pb1 from '../../../images/projectScreenshots/pokebattles/pb1.png';
import pb3 from '../../../images/projectScreenshots/pokebattles/pb3.png';
import pb4 from '../../../images/projectScreenshots/pokebattles/pb4.png';
import voyage1 from '../../../images/projectScreenshots/voyage/voyage1.png';
import voyage3 from '../../../images/projectScreenshots/voyage/voyage3.png';
import voyage7 from '../../../images/projectScreenshots/voyage/voyage7.png';

const MobileGallery = (props) => {
  return (
    <div id={classes.mobileGallery}>
      <div className={`${classes.gallery} ${props.padding}`}>
        <Swiper
          navigation={true}
          pagination={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={ttt1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ttt2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={noting1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={noting3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pb1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pb3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pb4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={voyage1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={voyage3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={voyage7} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MobileGallery;
