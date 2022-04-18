import React from "react";

import Header from "../components/Header/Header";
import Navbar from "../components/Gallery/Navbar/Navbar";
import GalleryList from "../components/Gallery/GalleryList/GalleryList";

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <GalleryList />
    </div>
  );
}

export default App;
