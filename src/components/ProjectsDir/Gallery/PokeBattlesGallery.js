import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import pb1 from '../../../images/projectScreenshots/pokebattles/pb1.png';
import pb2 from '../../../images/projectScreenshots/pokebattles/pb2.png';
import pb3 from '../../../images/projectScreenshots/pokebattles/pb3.png';
import pb4 from '../../../images/projectScreenshots/pokebattles/pb4.png';
import pb5 from '../../../images/projectScreenshots/pokebattles/pb5.png';
import pb6 from '../../../images/projectScreenshots/pokebattles/pb6.png';
import pb7 from '../../../images/projectScreenshots/pokebattles/pb7.png';
import pb8 from '../../../images/projectScreenshots/pokebattles/pb8.png';
import pb9 from '../../../images/projectScreenshots/pokebattles/pb9.png';

const PokeBattlesGallery = () => {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={pb1} alt="landing-page" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pb2} alt="login-modal" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pb3} alt="my-party" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pb4} alt="battle-grounds-attack" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pb5} alt="battle-grounds-catch" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pb6} alt="my-party-new-pokemon" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pb7} alt="edit-nickname" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pb8} alt="nickname-updated" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={pb9} alt="battle-grounds-win" />
      </SwiperSlide>
    </Swiper>
  );
};

export default PokeBattlesGallery;
