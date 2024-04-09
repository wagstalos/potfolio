// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../cards";

// Import Swiper styles
import "swiper/swiper.scss";

export default function Slider() {
  return (
    <div className="wp-slider">
      <h2 className="mt-50 sub-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#08b9bb"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-school"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
          <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
        </svg>
        Formação
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          // when window width is >= 640px
          300: {
            pagination: true,
            slidesPerView: 1.1,
            allowTouchMove: true,
          },
          400: {
            slidesPerView: 1.5,
          },
          570: {
            slidesPerView: 2.1,
          },
          720: {
            slidesPerView: 2.5,
          },
          900: {
            slidesPerView: 3.1,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="container"
      >
        <SwiperSlide>
          <Card
            ano="2023-2023"
            curso="Des. Fullstack de Sistemas Modernos para Nuvem (Cloud Native)"
            escola="Pós-Graduação Unesc"
            status="Concluído"
            title="Pós Desenvolvimento Fullstack de Sistemas Modernos para Nuvem (Cloud Native)"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            ano="2021-2022"
            curso="Front-end Avançado"
            escola="Curso Codeboost"
            status="Concluído"
            title="Front-end Avançado"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            ano="2019-2020"
            curso="English Course - Basic"
            escola="Curso Smile English"
            status="Concluído"
            title="English Course - Basic"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            ano="2019-2020"
            curso="Desenvolvedor Front-end"
            escola="Curso Treina Web"
            status="Concluído"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            ano="2014 - 2016"
            curso="Programação de jogos digitais"
            escola="Curso técnico Etec Guaracy"
            status="Concluído"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Card
            ano="2010-2012"
            curso="Design Gráfico"
            escola="Graduação Unip"
            status="Concluído"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
