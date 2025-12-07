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
  const [filteredNews, setFilteredNews] = useState(news);

  const handleSearch = (query) => {
    const deptResults = departments.filter((d) =>
      d.name.toLowerCase().includes(query.toLowerCase())
    );
    const newsResults = news.filter((n) =>
      n.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredDepartments(deptResults);
    setFilteredNews(newsResults);
  };

  return (
    <div className="home-container">
      <div className="hero">
        <h1>Welcome to CampusConnect</h1>
        <p>Your gateway to campus departments, news, and resources.</p>
      </div>

      <SearchBar onSearch={handleSearch} placeholder="Search departments or news..." />

      <h2>Featured Departments</h2>
      <div className="cards-container">
        {filteredDepartments.map((dept) => (
          <DepartmentCard key={dept.slug} department={dept} />
        ))}
        {filteredDepartments.length === 0 && <p>No departments found.</p>}
      </div>

      <h2 style={{ marginTop: "40px" }}>Latest News</h2>
      <div className="cards-container">
        {filteredNews.map((n) => (
          <NewsCard key={n.id} newsItem={n} />
        ))}
        {filteredNews.length === 0 && <p>No news found.</p>}
      </div>
    </div>
  );
}
