import React, { useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classes from './Gallery.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TTTGallery from './TTTGallery';

const Gallery = (props) => {
  return (
    <div className={classes.swiper}>
      {props.defaultSlide && (
        <Swiper
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={classes.defaultSlide}>
              <div className={classes.textBox}>
                <p>Click on a project below to view screenshots.</p>
                <p>OR</p>
                <p>Double click to view it live.</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      )}

      {props.tttClicked && <TTTGallery />}
    </div>
  );
};

export default Gallery;
