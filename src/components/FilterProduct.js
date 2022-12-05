import "./FilterProduct.css";
import { useState } from "react";
import { useEffect } from "react";

const itemCategory = [
  { category: "men's clothing" },
  { category: "women's clothing" },
  { category: "jewelery" },
  { category: "electronic" },
];

const FilterProduct = () => {
  const [category, setCategory] = useState([]);
  //   const [fiteredCategory, setFilteredCategory] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setCategory({ ...category, [e.target.value]: e.target.checked });
      console.log(category);
    } else {
      setCategory({ ...category, [e.target.value]: false });
      console.log(category);
    }
  };

  //   useEffect(() => {
  //     setFilteredCategory(
  //       itemCategory.filter((itemCategory) =>
  //         category.some((item) => item === itemCategory.category)
  //       )
  //     );
  //   }, [category]);

  return (
    <div className="checkbox-product">
      <h4>Department</h4>
      <input
        type="checkbox"
        value="men's clothing"
        checked="false"
        onChange={handleChange}
      />
      <span>Men</span>
      <label></label>
      <input
        type="checkbox"
        value="women's clothing"
        checked="false"
        onChange={handleChange}
      />
      <span>Women</span>
      <label></label>
    </div>
  );
};

export default FilterProduct;
