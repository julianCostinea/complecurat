import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { ArrowLeft, ArrowRight } from "../Icons/Icons";

import classes from "./Carousel.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      spaceBetween={0}
      speed={800}
      slidesPerView={1}
      navigation
      autoplay
    >
      <SwiperSlide>
        <p className={classes.referralParagraph}>
          <i>
            Lucram cu mai multi angajati de curatenie de la CompletCurat spre mare satisfactie. <br/>
            Intotdeauna fac o treaba buna si ne putem baza pe ei sa fie mereu curat in incaperi.
          </i>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p className={classes.referralParagraph}>
          <i>
          Contribuie foarte mult la experienta si atmosfera pozitiva in randul rezidentilor atunci <br/>
          cand curatenia in cele peste 150 de intrari si 20 de spalatorii este in regula. <br/>
          De aceea suntem foarte multumiti de CompletCurat ca furnizor de servicii.
          </i>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p className={classes.referralParagraph}>
          <i>
          Ne intalnim cu bucurie cu personalul de curatenie care gandeste singur si sunt flexibili <br/> 
          in raport cu performanta curatarii. Ei poseda o imagine de ansamblu asupra locurilor in care este nevoie de curatare.
          </i>
        </p>
      </SwiperSlide>
      {/* <div className={classes.swiperPrev}>{ArrowLeft}</div>
      <div className={classes.swiperNext}>{ArrowRight}</div> */}
    </Swiper>
  );
}
