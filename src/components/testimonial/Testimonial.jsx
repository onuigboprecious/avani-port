import React from 'react';
import './testimonial.css';
import avtr1 from '../../assets/avatar1.jpg';
import avtr2 from '../../assets/avatar2.jpg';
import avtr3 from '../../assets/avatar3.jfif';


// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const data = [
  {
    id: 1,
    avatar: avtr1,
    name: 'Elvis Ifeanyi',
    brand : 'visblog',
    review:
      'Honestly your service to visblog brought joy and satisfaction to me, i have always wanted to own a blog and you helped bring my dreams to reality! thank you precious for this unique service. Its actually Second to none.',
  },
  {
    id: 2,
    avatar: avtr2,
    name: 'Ginger MClaughlin',
    brand: 'Renegade Reading',
    review:
      'I want to thank you for creating this website for my Brand; it has effortlessly shown a huge impact in my bussiness ever since it was lauched. Your development time was so fast.',
  },
  {
    id: 3,
    avatar: avtr3,
    name: 'Mr Isaiah',
    brand: 'Mefactual',
    review:
      'Seeing Mefactual come to live through you was suprising. your Apporach to technical issues and Proper documentation is mind blowing',
  }
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="testimonials__container container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, avatar, name, review, brand }) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avater">
              <img src={avatar} alt={avatar} />
            </div>
            <h5 className="client__name">{name}</h5>
            <h6 className="client__name">{brand}</h6>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
