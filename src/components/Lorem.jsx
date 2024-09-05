import LoremParagraph from "./LoremParagraph";

const Lorem = () => {
  return (
    <div className="py-[5.5rem] bg-complementary flex justify-center text-white">
      <div className="w-5/6 flex gap-12 font-robotoCondensed">
        <LoremParagraph />
        <LoremParagraph />
      </div>
    </div>
  );
};

export default Lorem;
