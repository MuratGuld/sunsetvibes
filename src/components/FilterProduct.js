import "./FilterProduct.css";

const FilterProduct = ({ setCategory, category, filterProducts }) => {
  const handleChange = async (e) => {
    if (e.target.checked) {
      const itemTrue = { ...category, [e.target.value]: true };
      await setCategory(itemTrue);
    } else if (!e.target.checked) {
      const itemFalse = { ...category, [e.target.value]: false };
      await setCategory(itemFalse);
    }
  };

  return (
    <div className="checkbox-product">
      <h4>Category</h4>
      <label className="container">
        Men
        <input type="checkbox" 
        value="men's clothing" 
        onChange={handleChange} 
        />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Women
        <input
          type="checkbox"
          value="women's clothing"
          onChange={handleChange}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default FilterProduct;
