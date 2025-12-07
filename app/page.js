"use client";

import "./styles/home.css";
import { departments } from "../data/departments";
import { news } from "../data/news";
import DepartmentCard from "./components/DepartmentCard";
import NewsCard from "./components/NewsCard";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

export default function HomePage() {
  const [filteredDepartments, setFilteredDepartments] = useState(departments);

  const handleSearch = (query) => {
    const filtered = departments.filter((dept) =>
      dept.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDepartments(filtered);
  };

  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to CampusConnect</h1>
        <p>Your gateway to campus departments, news, and resources.</p>
      </div>

      <SearchBar onSearch={handleSearch} />

      <h2>Featured Departments</h2>
      <div className="cards-container">
        {filteredDepartments.map((dept) => (
          <DepartmentCard key={dept.slug} department={dept} />
        ))}
      </div>

      <h2 style={{ marginTop: "40px" }}>Latest News</h2>
      <div className="cards-container">
        {news.map((n) => (
          <NewsCard key={n.id} newsItem={n} />
        ))}
      </div>
    </div>
  );
}
