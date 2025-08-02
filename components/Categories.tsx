import React from "react";

const categories = [
  {
    label: "Easy/Warm up",
  },
  {
    label: "Tempo/Steady",
  },
  {
    label: "Sprint/High Intensity",
  },
];

const Categories = () => {
  return (
    <div className="grid w-full grid-cols-3 gap-2 overflow-x-auto sm:gap-4">
      {categories.map((category, i) => (
        <button
          key={i}
          className={`flex justify-between gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 text-left transition-[box-shadow] focus:outline-none`}
        >
          <div>
            <p className="text-sm text-gray-600">{category.label}</p>
            <div className="mt-2"></div>
          </div>
          <div className="relative h-full max-w-[140px] grow transition-opacity">
            <div className="relative">{/* SVG icons */}</div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default Categories;
