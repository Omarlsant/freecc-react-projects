import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const projects = [
    { name: "Accordion", path: "/accordion" }
    // { name: "Random Color Generator", path: "/random-color-generator" },
    // { name: "Star Rating", path: "/star-rating" },
    // { name: "Image Slider", path: "/image-slider" },
    // { name: "Load More Button", path: "/load-more-button" },
    // { name: "Tree View / Menu UI", path: "/tree-view" },
    // { name: "QR Code Generator", path: "/qr-code-generator" },
    // { name: "Light and Dark Mode", path: "/light-dark-mode" },
    // { name: "Scroll Indicator", path: "/scroll-indicator" },
    // { name: "Tabs", path: "/tabs" },
    // { name: "Modal Popup", path: "/modal-popup" },
    // { name: "Github Profile Finder", path: "/github-profile-finder" },
    // { name: "Search Autocomplete", path: "/search-autocomplete" },
    // { name: "Tic Tac Toe", path: "/tic-tac-toe" },
    // { name: "Feature Flag", path: "/feature-flag" },
    // { name: "useFetch Custom Hook", path: "/use-fetch" },
    // { name: "useOnclickOutside Custom Hook", path: "/use-onclick-outside" },
    // { name: "useWindowResize Custom Hook", path: "/use-window-resize" },
    // { name: "Scroll to Top and Bottom", path: "/scroll-to-top-bottom" },
    // { name: "Scroll to Section", path: "/scroll-to-section" },
    // { name: "Weather App", path: "/weather-app" },
    // { name: "Food Recipe App", path: "/food-recipe-app" },
    // { name: "Shopping Cart App", path: "/shopping-cart-app" },
    // { name: "Expense Tracker App", path: "/expense-tracker-app" },
    // { name: "Mern Stack Blog App", path: "/mern-blog-app" },
  ];


  return (
    <div className="home-container">
      <h1 className="home-title">React Practice Projects</h1>
      <ul className="home-links">
        {projects.map((project, index) => (
          <li key={index}>
            <Link to={project.path} className="home-link">
              {project.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;