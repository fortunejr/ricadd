import React from "react";
import avatarIImg from "../assets/1.jpg";
import avatarIIImg from "../assets/2.jpg";
import avatarIIIImg from "../assets/3.jpg";
import avatarIVImg from "../assets/4.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles/App.css";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

SwiperCore.use([Autoplay]);
export default function Testimonials() {
  return (
    <>
      <section>
        <div className="main">
          <div className="head-p">
            <span style={{ paddingRight: "5px" }}>GET AN </span>
            <span style={{ color: "#1D8BA0" }}> OPINION</span>
          </div>
          <div className="head">TESTIMONIALS</div>
          <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 3000 }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 10,
              stretch: 50,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 150,
              },
            }}
          >
            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
                <p>
                I am so glad i met Ricadd travels, the amount of precision they put into their work is remarkable. Kudos to you all
                </p>
                <h6 className="review-by">- Maureen Dikeh</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIIImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                    loading="lazy"
                  />
                </div>
                <p>
                I don't think any travel agency has treated my visa application like how Ricadd Travels has. It's like they're the visa offficers. Thank you and God bless you all.
                </p>
                <h6 className="review-by">- Ikechukwu Fredrick</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className="swiper-slide">
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIIIImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
                <p>
                A few lines review is not enough to explain how satisfied i am with this travel agency, they are top travel agencies out there!.
                </p>
                <h6 className="review-by">- Jude Obafemi</h6>
              </div>
            </SwiperSlide>

            <SwiperSlide className=" ">
              <div
                style={{
                  paddingRight: 20,

                  paddingLeft: 20,
                }}
              >
                <div className="testimonials-profile-circle">
                  <img
                    src={avatarIVImg}
                    alt="testimonial-avatar"
                    className="testimonial-avatar"
                  />
                </div>
                <p>
                When it comes to flights and hotel bookings for vacation leave it for Ricadd travels, I honestly had so much peace working with them this past year.
                </p>
                <h6 className="review-by">- Uka Chinasa</h6>
              </div>
            </SwiperSlide>

           
          </Swiper>
        </div>
      </section>
    </>
  );
}