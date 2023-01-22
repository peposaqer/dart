import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "../translations/i18n";
import bg7 from "../img/57357.jpg";
import bg8 from "../img/covertina.jpg";
import bg9 from "../img/jaf.jpg";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="wrapper bg-dark">
        <div
          className="swiper-container swiper-hero dots-over"
          data-margin="0"
          data-autoplay="true"
          data-autoplaytime="5000"
          data-nav="true"
          data-dots="true"
          data-items="1"
        >
          <>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={true}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="swiper-wrapper"
            >
              <SwiperSlide>
                <div
                  className="swiper-slide"
                  // data-image-src="./assets/img/photos/bg7.jpg"
                  style={{ backgroundImage: `url(${bg7})` }}
                >
                  <div className="container h-100">
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                  // data-image-src="./assets/img/photos/bg8.jpg"
                  style={{ backgroundImage: `url(${bg8})` }}
                >
                  <div className="container h-100">
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className="swiper-slide bg-overlay bg-overlay-400 bg-dark bg-image"
                  // data-image-src="./assets/img/photos/bg9.jpg"
                  style={{ backgroundImage: `url(${bg9})` }}
                >
                  <div className="container h-100">
                    
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="home">
            <h1>Home</h1>
            <p>
              Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.Gymme is fitness platform built for gym owners and gym members. we have a vision and a destination to take the fitness industry to another level and make it easier for businesses and individuals. we are helping gym owners to manage, control, deduct and reduce the expenses and increase revenue streams of their gyms. we are helping athletes to keep fit, healthy by make it easier for them to join gym or any sport activity.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
