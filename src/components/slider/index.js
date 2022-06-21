// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../cards";

// Import Swiper styles
import "swiper/swiper.scss";

export default function Slider() {
  return (
    <div className="wp-slider">
      <Swiper
        spaceBetween={10}
        slidesPerView={3.1}
        breakpoints={{
          // when window width is >= 640px
          300: {
            pagination: true,
            slidesPerView: 1.1,
          },
          600: {
            slidesPerView: 3.2,
            spaceBetween:40
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="container"
      >
        <SwiperSlide>
          <Card
            ano="2010-2012"
            curso="Design Gráfico"
            escola="Universidade Paulista"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            ano="2014 - 2016"
            curso="Programação de jogos digitais"
            escola="Etec Guaracy Silveira"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            ano="2019-2020"
            curso="Desenvolvedor Front-end"
            escola="Treina Web"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            ano="2019-2020"
            curso="English Course - Basic"
            escola="Smile English"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            ano="2020-2020"
            curso="React Native Programmer"
            escola="Dev Samurai"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            ano="2021-2022"
            curso="Front-end Avançado"
            escola="Codeboost"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
