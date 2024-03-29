import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ttt1 from '../../../images/projectScreenshots/tic-tac-toe/ttt1.png';
import ttt2 from '../../../images/projectScreenshots/tic-tac-toe/ttt2.png';
import ttt3 from '../../../images/projectScreenshots/tic-tac-toe/ttt3.png';
import ttt4 from '../../../images/projectScreenshots/tic-tac-toe/ttt4.png';
import ttt5 from '../../../images/projectScreenshots/tic-tac-toe/ttt5.png';
import ttt6 from '../../../images/projectScreenshots/tic-tac-toe/ttt6.png';

const TTTGallery = (props) => {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Pagination, Navigation]}
      id={props.id}
      className='mySwiper'
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
