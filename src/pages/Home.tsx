import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const projects = [
    { name: "Accordion", path: "/accordion" },
    { name: "Random Color Generator", path: "/random-color" }
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
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
        React Practice Projects
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <li key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <Link
              to={project.path}
              className="block p-6 text-center hover:bg-gray-100"
            >
             <span className="text-xl font-semibold text-gray-700">{project.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;