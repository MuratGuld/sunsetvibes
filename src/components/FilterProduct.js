import "./FilterProduct.css";
import { useState } from "react";
import { useEffect } from "react";

// const itemCategory = [
//   { category: "men's clothing" },
//   { category: "women's clothing" },
//   { category: "jewelery" },
//   { category: "electronic" },
// ];

const FilterProduct = ({ setCategory, category, filterProducts }) => {
  //   const [fiteredCategory, setFilteredCategory] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setCategory({ ...category, [e.target.value]: true });
      console.log(category);
    } else if (!e.target.checked) {
      setCategory({ ...category, [e.target.value]: false });
      console.log(category);
    }

    filterProducts(category);
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
      <input type="checkbox" value="men's clothing" onChange={handleChange} />
      <span>Men</span>
      <label></label>
      <input type="checkbox" value="women's clothing" onChange={handleChange} />
      <span>Women</span>
      <label></label>
    </div>
  );
};

export default FilterProduct;
