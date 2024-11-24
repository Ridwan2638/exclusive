import flashSales from "../data/flashSales.json";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Carousel from "react-multi-carousel";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div className="carousel-button-group">
      {" "}
      // remember to give it position:absolute
      <ButtonOne
        className={currentSlide === 0 ? "disable" : ""}
        onClick={() => previous()}
      />
      <ButtonTwo onClick={() => next()} />
      <ButtonThree onClick={() => goToSlide(currentSlide + 1)}>
        {" "}
        Go to any slide{" "}
      </ButtonThree>
    </div>
  );
};
<Carousel arrows={false} customButtonGroup={<ButtonGroup />}>
  <ItemOne />
  <ItemTwo />
</Carousel>;
