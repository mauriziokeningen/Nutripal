import React from "react";
import "./Recipes1.css";
import BananaOatmealPancakes from "../assets/BananaOatmealPancakes.jpg";
import AvocadoChickenSalad from "../assets/AvocadoChickenSalad.jpg";
import BeefVegetableStew from "../assets/BeefVegetableStew.jpg";
import BeefVegetablePasta from "../assets/BeefVegetablePasta.jpeg";
import HeartHollow from "../assets/HollowHeart.png"; // Import the heart image
import Filters from "../assets/Filters.png"; // Import the Filters image
import WhiteUser from "../assets/WhiteUser.png"; // Import the user image
import WhiteGear from "../assets/WhiteGear.png"; // Import the gear image

function Recipes1() {
  const recipes = [
    {
      title: "Banana Oatmeal Pancakes",
      description:
        "Fluffy pancakes made with ripe bananas and oats, perfect for a quick and healthy breakfast!",
      image: BananaOatmealPancakes,
    },
    {
      title: "Chicken and Avocado Salad",
      description:
        "Freshly grilled chicken breast, sliced avocado, cherry tomatoes, and mixed greens with a lemon vinaigrette.",
      image: AvocadoChickenSalad,
    },
    {
      title: "Beef and Vegetable Stew",
      description:
        "Tender chunks of beef slow-cooked with carrots, potatoes, and a rich, savory broth.",
      image: BeefVegetableStew,
    },
    {
      title: "Beef and Vegetable Pasta",
      description:
        "Simple yet flavorful pasta dish with garlic, olive oil, chili flakes, and parsley.",
      image: BeefVegetablePasta,
    },
  ];

  const totalCalories = 2000;
  const remainingCalories = 800;
  const progress = (remainingCalories / totalCalories) * 100;

  return (
    <div className="app">
      {/* Header Section */}
      <div className="header">
        {/* User Image */}
        <img src={WhiteUser} alt="User" className="user-image" />
        {/* Gear Image */}
        <img src={WhiteGear} alt="Settings" className="gear-image" />

        <div className="search-bar-box">
          <input
            type="text"
            placeholder="Search Any Recipe..."
            className="search-bar"
          />
          {/* Rectangle with Filters Image */}
          <div className="rectangle">
            <img src={Filters} alt="Filters Icon" />
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            <div className="calories-text">{remainingCalories} kcal left to consume</div>
          </div>
        </div>
      </div>

      {/* Recipe List */}
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-details">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
              <div className="details-button-container">
                <button
                  className="details-button"
                  onClick={() => alert(`See details for ${recipe.title}`)}
                >
                  See Details
                </button>
                <div className="heart-circle">
                  <img src={HeartHollow} alt="Heart" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="footer-nav">
        <button>Home</button>
        <button>Water Intake</button>
        <button>Recipes</button>
        <button>Expert</button>
        <button>Progress</button>
      </div>
    </div>
  );
}

export default Recipes1;
