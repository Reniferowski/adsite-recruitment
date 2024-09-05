import { useState } from "react";
import { text, expandedText } from "../consts";

const LoremParagraph = () => {
  const [expand, setExpand] = useState(false);

  return (
    <div className="md:w-1/2">
      <h3 className="font-bebas text-2xl">
        Id nostrud enim esse consectetur in eu mollit fugiat aute. Velit nulla
        commodo.
      </h3>
      <p className="mt-4 text-sm">
        {text} {!expand ? " [...]" : expandedText}
      </p>
      <button
        className="mt-6 text-sm flex border-b pb-1.5"
        onClick={() => setExpand(!expand)}
      >
        <span>{!expand ? "Rozwiń" : "Zwiń"}</span>
        <svg
          className={`ml-1.5 mt-0.5 ${!expand ? `` : `rotate-180`}`}
          width="13"
          height="15"
          viewBox="0 0 13 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8.44461L1.07955 7.35086L5.58239 11.8537L5.58239 0.191772L7.14489 0.191773L7.14489 11.8537L11.6335 7.35086L12.7273 8.44461L6.36364 14.8083L0 8.44461Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  );
};
export default LoremParagraph;
