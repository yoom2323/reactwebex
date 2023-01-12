import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import styles from "./headerstyles.module.css";
import { FiArrowDown } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const imgList = [
  { id: 1, URL: "/images/img-1.jpg", alt: "img1" },
  { id: 2, URL: "/images/img-2.jpg", alt: "img2" },
];

function Header() {
  const path = process.env.PUBLIC_URL;

  return (
    <div>
      <section>
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mainSwiper"
        >
          {imgList.map((img) => (
            <SwiperSlide key={img.id}>
              <img src={path + img.URL} alt={img.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <header>
        <div className={styles.headerSection}>
          <h1>
            누군가를 위해
            <br />
            당신의 삶을
            <br />
            버리지 마세요.
          </h1>
          <p>
            인생에서 가장 좋아하는 것을 하는 데는 돈이 필요하지 않다. <br />
            즉, 우리 모두가 가진 가장 귀중한 자산은 시간이다.
          </p>
          <a href="#" className={styles.ghost_btn}>
            more view
          </a>
          <a href="#main_section1">
            <span className={styles.material_symbols_rounded}>
              <FiArrowDown />
            </span>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
