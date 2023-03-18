import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ttt1 from '../../../images/projectScreenshots/tic-tac-toe/ttt-1.png';
import ttt2 from '../../../images/projectScreenshots/tic-tac-toe/ttt-2.png';
import ttt3 from '../../../images/projectScreenshots/tic-tac-toe/ttt-3.png';
import ttt4 from '../../../images/projectScreenshots/tic-tac-toe/ttt-4.png';
import ttt5 from '../../../images/projectScreenshots/tic-tac-toe/ttt-5.png';
import ttt6 from '../../../images/projectScreenshots/tic-tac-toe/ttt-6.png';

const TTTGallery = () => {
  return (
    <Swiper
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={ttt1} alt="enter-players-name" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ttt2} alt="player2s-turn" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ttt3} alt="draw" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ttt4} alt="winner" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ttt6} alt="menu" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={ttt5} alt="scoreboard" />
      </SwiperSlide>
    </Swiper>
  );
};

export default TTTGallery;
