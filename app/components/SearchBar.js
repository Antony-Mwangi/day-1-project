"use client";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search departments..."
      value={query}
      onChange={handleChange}
      style={{
        padding: "10px",
        width: "100%",
        maxWidth: "400px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        marginBottom: "30px",
      }}
    />
  );
}
