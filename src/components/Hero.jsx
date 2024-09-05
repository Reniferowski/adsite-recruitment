import { CarsHero } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div id="hero" className="flex justify-center relative">
      <div className="w-5/6 mt-12 mb-20 md:mt-24 md:mb-16 lg:mt-32 lg:mb-[22.625rem] z-10">
        <h1 className="w-11/12 lg:w-2/3 xl:w-1/2 text-5xl md:text-7xl font-bebas">
          SPRZEDAJEMY SAMOCHODY Z EUROPY
        </h1>
        <p className="w-2/3 md:w-1/3 lg:w-[22.5%] mt-4 md:mt-8 font-robotoCondensed">
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
        <div className="mt-12 flex font-robotoFlex font-semibold gap-6">
          <Button href="#gallery">Zobacz zdjęcia</Button>
          <Button secondary>Zadzwoń do nas</Button>
        </div>
      </div>
      <img
        className="absolute right-0 bottom-0 sm:-bottom-10 lg:bottom-24 z-0"
        src={CarsHero}
        alt="Cars Image"
      />
    </div>
  );
};

export default Hero;
