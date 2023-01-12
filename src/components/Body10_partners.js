import "../assets/Body10_partners.scss";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper";

const dataList = [
  { id: 1, URL: "/images/client-01.png", alt: "cl1" },
  { id: 2, URL: "/images/client-02.png", alt: "cl2" },
  { id: 3, URL: "/images/client-03.png", alt: "cl3" },
  { id: 4, URL: "/images/client-04.png", alt: "cl4" },
  { id: 5, URL: "/images/client-05.png", alt: "cl5" },
  { id: 6, URL: "/images/client-06.png", alt: "cl6" },
  { id: 7, URL: "/images/client-07.png", alt: "cl7" },
  { id: 8, URL: "/images/client-08.png", alt: "cl8" },
  { id: 9, URL: "/images/client-09.png", alt: "cl9" },
  { id: 10, URL: "/images/client-10.png", alt: "cl10" },
];
function Body10_partners() {
  const [data, setData] = useState(dataList);
  const path = process.env.PUBLIC_URL;
  return (
    <article id="section_10">
      <h2>주요 파트너사</h2>
      <p>당신이 마음과 영감을 따를 수 있는 용기를 가지는 것이다.</p>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        slidesPerView={6}
        breakpoints={{
          761: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
      >
        {data.map((img) => (
          <SwiperSlide key={img.id}>
            <img src={path + img.URL} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </article>
  );
}

export default Body10_partners;
