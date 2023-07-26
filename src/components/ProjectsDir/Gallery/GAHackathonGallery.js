import React from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import gahackathon1 from '../../../images/projectScreenshots/ga-hackathon/ga-hackathon1.png';
import gahackathon2 from '../../../images/projectScreenshots/ga-hackathon/ga-hackathon2.png';
import gahackathon3 from '../../../images/projectScreenshots/ga-hackathon/ga-hackathon3.png';
import gahackathon4 from '../../../images/projectScreenshots/ga-hackathon/ga-hackathon4.png';
import gahackathon5 from '../../../images/projectScreenshots/ga-hackathon/ga-hackathon5.png';

const GAHackathonGallery = (props) => {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      modules={[Pagination, Navigation]}
      id={props.id}
      className='mySwiper'
    >
      <SwiperSlide>
        <img src={gahackathon1} alt="landing-page" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gahackathon2} alt="sign-up" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gahackathon3} alt="add-destionation" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gahackathon4} alt="new-destionation-added" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={gahackathon5} alt="itinerary" />
      </SwiperSlide>
    </Swiper>
  );
};

export default GAHackathonGallery;
