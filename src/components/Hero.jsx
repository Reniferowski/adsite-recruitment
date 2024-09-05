import { CarsHero } from "../assets";

const Hero = () => {
  return (
    <div id="hero" className="flex justify-center relative">
      <div className="w-5/6 mt-32 mb-[22.625rem]">
        <h1 className="w-1/2 text-7xl font-bebas">
          SPRZEDAJEMY SAMOCHODY Z EUROPY
        </h1>
        <p className="w-[22.5%] mt-8 font-robotoCondensed">
          Kup komfortowy pojazd, aby każda podróż była wyjątkowym przeżyciem.
        </p>
        <div className="mt-12 flex font-robotoFlex font-semibold gap-6">
          <button className="text-whiteSmoke bg-details px-6 py-3 rounded-lg hover:shadow-xl transition duration-300">
            <a href="#gallery">Zobacz zdjęcia</a>
          </button>
          <button className="text-details border border-details px-6 py-3 rounded-lg hover:shadow-xl hover:bg-details hover:text-white hover:opacity-65 transition duration-300">
            Zadzwoń do nas
          </button>
        </div>
      </div>
      <img
        className="absolute right-0 bottom-24"
        src={CarsHero}
        alt="Cars Image"
      />
    </div>
  );
};

export default Hero;
