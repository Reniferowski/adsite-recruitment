const Footer = () => {
  return (
    <div
      id="footer"
      className="py-6 w-full border-t bg-complementary flex justify-center text-white font-robotoCondensed"
    >
      <div className="w-5/6 flex justify-between">
        <span className="font-bold">Cars Spot</span>
        <a href="#policy" className="underline">
          Polityka prywatności
        </a>
      </div>
    </div>         
  );
};

export default Footer;
