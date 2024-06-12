import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShopByCategory.css";

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
      <h2 className="category-title">Shop by Category</h2>
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
            <div className="pricing"><span>$1</span><span>Shop now</span></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./ShopByCategory.css";

// const ShopByCategory = () => {
//   const categories = [
//     "fruits and vegetables",
//     "bakery",
//     "meat and seafood",
//     "beverage",
//     "biscuit and snacks"
//   ];

//   const [activeCategory, setActiveCategory] = useState("");
//   const [recipes, setRecipes] = useState([]);

//   // Mock data for each category
//   const mockData = {
//     "fruits and vegetables": [
//       {
//         idMeal: "1",
//         strMeal: "Apple Salad",
//         strMealThumb: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"
//       },
//       {
//         idMeal: "2",
//         strMeal: "Tomato Soup",
//         strMealThumb: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"
//       }
//     ],
//     "bakery": [
//       {
//         idMeal: "3",
//         strMeal: "Chocolate Cake",
//         strMealThumb: "https://www.themealdb.com/images/media/meals/xvsurr1511719182.jpg"
//       }
//     ],
//     "meat and seafood": [],
//     "beverage": [],
//     "biscuit and snacks": []
//   };

//   useEffect(() => {
//     // Fetch recipes based on active category
//     const fetchRecipes = async () => {
//       if (activeCategory && mockData[activeCategory]) {
//         setRecipes(mockData[activeCategory]);
//       } else {
//         setRecipes([]);
//       }
//     };

//     fetchRecipes();
//   }, [activeCategory]);

//   return (
//     <div className="shop-by-category">
//       <h2 className="category-title">Shop by Category</h2>
//       <div className="category-buttons">
//         {categories.map((category) => (
//           <button
//             key={category}
//             className={activeCategory === category ? "active" : ""}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>
//       <div className="recipe-list">
//         {recipes.map((recipe) => (
//           <div key={recipe.idMeal} className="recipe-item">
//             <img src={recipe.strMealThumb} alt={recipe.strMeal} />
//             <h3>{recipe.strMeal}</h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShopByCategory;

