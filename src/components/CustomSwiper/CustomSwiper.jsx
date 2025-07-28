import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
register();


//Такой слайдер из коробки не поддерживает TypeScript
//Пропсы:
//data - массив итемов для отображения в свайпере
//keys = массив ключей итемов
//slidesPerView = nubmer, количество видимых итемов на свайпер
export const CustomSwiper = ({ data, keys, slidesPerView }) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      injectStyles: [
        `          
          .swiper-button-disabled {
           opacity: 0 !important;
          }
          .swiper-pagination-bullet{
            width: 6px;
            height: 6px;
            background-color: #42567A;
            color: blue;
            bottom: -10px;

            @media (min-width: 1024px) { 
            display: none;
            }; 
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <>
      <swiper-container
        slides-per-view={slidesPerView}
        pagination-clickable={true}
        ref={swiperRef}
        init="false"
      >
        {data.map((item, i) => {
          return <swiper-slide key={keys[i]}>{item}</swiper-slide>;
        })}
      </swiper-container>
    </>
  );
};
