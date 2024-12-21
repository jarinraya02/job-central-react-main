import React from "react";

const Category = ({ category }) => {
  // eslint-disable-next-line react/prop-types
  const { _id, category_title, jobs, img } = category;
  return (
    <div className="p-2 lg:p-10 bg-gray-50 shadow-md mb-4 lg:mb-0">
      <img className="h-6 w-6" src={img} alt="" />
      <h1 className="text-xl font-extrabold text-gray-800">{category_title}</h1>
      <p>{jobs}</p>
    </div>
  );
};

export default Category;
