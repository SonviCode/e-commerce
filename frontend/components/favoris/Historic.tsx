import React from "react";
import { useSelector } from "react-redux";
import { productsItem } from "../../types/product";
import ProductCard from "../product/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fs from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../store/store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, A11y } from "swiper";

const Historic = () => {
  const historicData: productsItem[] = useSelector(
    (state: RootState) => state.historic.value
  );

  return (
    <div className="border shadow-md  rounded-md px-5 py-10 flex flex-col">
      <h2 className="text-2xl font-bold mb-5">Historique</h2>
      <div className="md:flex md:justify-center xl:justify-between items-center overflow-hidden w-full">
        {historicData.length > 0 ? (
          <>
            <span className="hidden xl:block">
              <FontAwesomeIcon icon={fs.faChevronLeft} />
            </span>
            <div className="max-w-[700px] [1100px]:max-w-[100px] lg:max-w-[615px] xl:max-w[875px] 2xl:max-w-[1130px] md:px-10 lg:px-0">
              <Swiper
                modules={[Navigation, A11y]}
                className="mySwiper"
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                navigation
                breakpoints={{
                  350: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1300: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1550: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {historicData.map(
                  (historic: productsItem, index: React.Key) => (
                    <SwiperSlide key={index} className="max-w-[300px]">
                      <ProductCard el={historic} />
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
            <span className="hidden xl:block">
              <FontAwesomeIcon icon={fs.faChevronRight} />
            </span>
          </>
        ) : (
          <div>
            <h3 className="text-center p-5 text-xl">
              Vous n&apos;avez rien dans votre historique, continuez vos
              recherches !
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Historic;
