import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShopByCategory.css";
import { FiArrowRight } from "react-icons/fi";


const ShopByCategory = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setCategories(response.data.categories);
        setActiveCategory(response.data.categories[0].strCategory);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${activeCategory}`
        );
        setRecipes(response.data.meals || []);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    if (activeCategory) {
      fetchRecipes();
    }
  }, [activeCategory]);


  return (
    <div className="shop-by-category">
      <h2 className="category-title-main">Shop by Category</h2>
      <h1 className="category-title">Top Category of Organic Food</h1>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category.idCategory}
            className={activeCategory === category.strCategory ? "active" : ""}
            onClick={() => setActiveCategory(category.strCategory)}
          >
            {category.strCategory}
          </button>
        ))}
      </div>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.idMeal} className="recipe-item">
            <img src={recipe.strMealThumb} alt={recipe.strMeal} />
            <div>
            <h3>{recipe.strMeal}</h3>
            <hr /> 
            {/* <p>lowsdbajshbdashbdjshbdjhsb</p> */}
            <p>loremipsumdolorsitametloremipsum</p>
            </div>
            <div className="pricing"><span>$8.45</span> 
            <div className="price-line-container">
                <div className="price-line">
            <span>Shop now <FiArrowRight /></span>
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default ShopByCategory;

