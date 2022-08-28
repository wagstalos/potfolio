import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";

export default function Skills() {

  return (
    <div className="wp-slider">
      <Swiper
        spaceBetween={10}
        slidesPerView={2.2}
        breakpoints={{
          // when window width is >= 640px
          300: {
            pagination: true,
            spaceBetween: 20,
            slidesPerView: 3.3,
            allowTouchMove: true,
          },
          400: {
            pagination: true,
            spaceBetween: 20,
            slidesPerView: 3.8,
            allowTouchMove: true,
          },
          600: {
            slidesPerView: 5.5,
          },
          750: {
            slidesPerView: 6.5,
          },
          850: {
            slidesPerView: 8.5,
          },
        }}
        className="flex flex-wrap flex-center"
      >
        <SwiperSlide>
          <div className="card-skills flex flex-between">
            <h5>Salesforce</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28px"
              height="28px"
              viewBox="0 0 52 52"
              enable-background="new 0 0 52 52"
            >
              <path
                fill="currentColor"
                d="M21.7,11.9c1.7-1.7,4-2.8,6.6-2.8c3.4,0,6.4,1.9,8,4.7c1.4-0.6,2.9-1,4.5-1C47,12.8,52,17.8,52,24  s-5,11.2-11.2,11.2c-0.8,0-1.5-0.1-2.2-0.2c-1.4,2.5-4.1,4.2-7.2,4.2c-1.3,0-2.5-0.3-3.6-0.8c-1.4,3.3-4.7,5.6-8.6,5.6  c-4,0-7.5-2.5-8.8-6.1c-0.6,0.1-1.2,0.2-1.8,0.2c-4.8,0-8.7-3.9-8.7-8.7c0-3.2,1.7-6,4.3-7.5c-0.5-1.2-0.8-2.6-0.8-4  c0-5.5,4.5-10,10.1-10C17,8,19.9,9.5,21.7,11.9"
              />
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between">
            <h5>Html5 </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-html5"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#08b9bb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between ">
            <h5>CSS3 </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-css3"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#08b9bb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between ">
            <h5>Javascript </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-javascript"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#08b9bb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between ">
            <h5>SASS </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-sass"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="#08b9bb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="9" />
              <path d="M12 10.523c2.46 -.826 4.002 -.826 4.002 -2.155c0 -1.366 -1.347 -1.366 -2.735 -1.366c-1.91 0 -3.352 .49 -4.537 1.748c-.848 .902 -1.027 2.449 -.153 3.307c.973 .956 3.206 1.789 2.884 3.493c-.233 1.235 -1.469 1.823 -2.617 1.202c-.782 -.424 -.454 -1.746 .626 -2.512s2.822 -.992 4.1 -.24c.98 .575 1.046 1.724 .434 2.193" />
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between ">
            <h5>Bootstrap</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-bootstrap"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#08b9bb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M2 12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2"></path>
              <path d="M2 12a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-4a2 2 0 0 1 2 -2"></path>
              <path d="M9 16v-8h3.5a2 2 0 1 1 0 4h-3.5h4a2 2 0 1 1 0 4h-4z"></path>
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between ">
            <h5>WordPress</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-wordpress"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#08b9bb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9.5 6h5.5"></path>
              <path d="M2 6h5"></path>
              <path d="M10.5 6l6 13l4.5 -9"></path>
              <path d="M13.5 6l4.5 9.5"></path>
              <path d="M2.5 6l6 13l4 -8.5"></path>
              <path d="M5.5 6l4.5 9.5"></path>
              <path d="M21 10c.236 -.739 1 -1.91 1 -3.5c0 -2.492 -1.034 -3.5 -2.5 -3.5c-1.197 0 -1.5 1.137 -1.5 2c0 2.562 3 2.882 3 5z"></path>
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between ">
            <h5>ReactJS</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-react"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <ellipse cx="12" cy="12" rx="4" ry="10"></ellipse>
              <ellipse
                transform="rotate(60 12 12)"
                cx="12"
                cy="12"
                rx="4"
                ry="10"
              ></ellipse>
              <ellipse
                transform="rotate(-60 12 12)"
                cx="12"
                cy="12"
                rx="4"
                ry="10"
              ></ellipse>
              <circle fill="#08b9bb" cx="12" cy="12" r="1"></circle>
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between">
            <h5>Construct 3</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-pacman"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#08b9bb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5.636 5.636a9 9 0 0 1 13.397 .747l-5.619 5.617l5.619 5.617a9 9 0 1 1 -13.397 -11.981z" />
              <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between">
            <h5>Vue</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-vue"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#08b9bb"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M18.5 5l-6.5 10l-6.5 -10"></path>
              <path d="M15 5l-3 4.5l-3 -4.5h-7l10 16l10 -16z"></path>
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between">
            <h5>Bitbucket</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-bitbucket"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3.648 4a0.64 .64 0 0 0 -.64 .744l3.14 14.528c.07 .417 .43 .724 .852 .728h10a0.644 .644 0 0 0 .642 -.539l3.35 -14.71a0.641 .641 0 0 0 -.64 -.744l-16.704 -.007z"></path>
              <path d="M14 15h-4l-1 -6h6z"></path>
            </svg>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="card-skills flex flex-between" slot="wrapper-end">
            <h5>Git</h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-git"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="16" cy="12" r="1"></circle>
              <circle cx="12" cy="8" r="1"></circle>
              <circle cx="12" cy="16" r="1"></circle>
              <path d="M12 15v-6"></path>
              <path d="M15 11l-2 -2"></path>
              <path d="M11 7l-1.9 -1.9"></path>
              <path d="M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z"></path>
            </svg>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
