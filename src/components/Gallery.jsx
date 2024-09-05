import CarsCarousel from "./CarsCarousel";

const Gallery = () => {
  return (
    <div id="gallery" className="flex flex-col items-end my-14 sm:my-20">
      <div className="w-[93.8%] ">
        <h4 className="text-xl text-details font-robotoCondensed">
          Prezentacja firmy
        </h4>
        <h2 className="text-4xl text-[#1D1D1B] font-bebas">
          ZOBACZ NASZĄ GALERIĘ ZDJĘĆ
        </h2>
        <div className="mt-6 flex gap-12 font-robotoFlex">
          <a
            href="#car"
            className="px-1 text-details font-semibold border-b border-details"
          >
            Samochody osobowe
          </a>
          <a href="#delivery">Samochody dostawcze</a>
        </div>
        <CarsCarousel />
      </div>
      <div className="flex justify-center mt-12 gap-2.5" id="bullets"></div>
    </div>
  );
};

export default Gallery;
